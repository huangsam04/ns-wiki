(function () {
    "use strict";

    let hasRenderedSummary = false;
    const SUMMARY_API_BASE = "https://nswiki.cn";

    /**
     * 判断是否为Wiki内容页面
     */
    function isWikiViewPage() {
        const path = window.location.pathname;
        const blockedPrefixes = ["/e/", "/a/", "/p/", "/login/","/zh/home"];
        return !blockedPrefixes.some(p => path.startsWith(p));
    }
    if (!isWikiViewPage()) return;

    /**
     * 解析路径和语言
     */
    function parsePathAndLocale() {
        const raw = window.location.pathname.replace(/^\/+/, "");
        const match = raw.match(/^([a-z]{2})\/(.*)$/i);
        if (match) return { locale: match[1], path: match[2] || "home" };
        return { locale: "zh", path: raw || "home" };
    }
    const { path, locale } = parsePathAndLocale();

    /**
     * 等待内容区域加载
     */
    function waitForContent() {
        return new Promise(resolve => {
            const timer = setInterval(() => {
                const el = document.querySelector(".contents") || 
                          document.querySelector(".page-contents") || 
                          document.querySelector("article") || 
                          document.querySelector("main");
                if (el) {
                    clearInterval(timer);
                    resolve(el);
                }
            }, 300);
        });
    }

    /**
     * 精准解析器：彻底解决星号+换行问题
     */
    function parseMarkdown(text) {
        if (!text) return "";
        
        // 第一步：精准过滤列表星号（不影响粗体）
        let cleanText = text
            // 过滤行首的 * （包含空格+*）
            .replace(/^\s*\*(?=\s)/gm, "")
            // 过滤行内孤立的 * （前后无*）
            .replace(/(?<!\*)\*(?!\*)/g, "")
            // 粗体解析
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
        
        // 第二步：强制换行（核心修复）
        const lines = cleanText.split(/\n+/);
        return lines
            .filter(line => line.trim() !== "")
            .map(line => line.trim())
            .join("<br>");
    }

    /**
     * 极简面板渲染（修复颜色变化问题）
     */
    function renderSummaryPanel(container) {
        if (hasRenderedSummary || container.querySelector(".wiki-summary-panel")) return;
        
        // 核心面板（极简样式）
        const summaryPanel = document.createElement("div");
        summaryPanel.className = "wiki-summary-panel";
        summaryPanel.style.cssText = `
            margin:0 0 1.5rem 0;
            padding:1rem;
            border-radius:4px;
            background:#f5f7fa;
            border:1px solid #e1e4e8;
        `;

        // 内容容器（核心修复：全程统一背景色）
        const summaryContent = document.createElement("div");
        summaryContent.className = "wiki-summary-content";
        summaryContent.style.cssText = `
            width:100%;
            min-height:80px;
            font-size:0.95rem;
            line-height:1.8;
            color:#333;
            font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            white-space: break-spaces;
            word-wrap: break-word;
            background:#f5f7fa; /* 强制统一背景色，不再变白色 */
            border:none; /* 移除可能的边框 */
            outline:none; /* 移除焦点轮廓 */
        `;
        // 默认加载提示
        summaryContent.innerHTML = `<span style="color:#666;">正在生成AI总结……</span>`;
        // 全程设为不可编辑，避免contenteditable导致的样式变化
        summaryContent.setAttribute("contenteditable", "false");

        // 极简样式（移除所有导致颜色变化的样式）
        const style = document.createElement("style");
        style.textContent = `
            .wiki-summary-content strong {
                font-weight:600;
                color:#2d3748;
            }
            /* 彻底移除所有可能导致背景变化的样式 */
            .wiki-summary-content {
                background:#f5f7fa !important; /* 强制优先级 */
            }
            .wiki-summary-content br {
                display: block;
                margin: 0;
            }
            /* 禁用编辑相关的所有样式 */
            [contenteditable="true"] {
                background:#f5f7fa !important;
                outline:none !important;
            }
        `;
        document.head.appendChild(style);

        summaryPanel.append(summaryContent);
        container.insertBefore(summaryPanel, container.firstChild);
        hasRenderedSummary = true;

        return {
            panel: summaryPanel,
            content: summaryContent
        };
    }

    /**
     * 流式加载（移除双击功能，修复颜色变化）
     */
    function loadSummaryStream(pathName, contentDiv) {
        contentDiv.innerHTML = `<span style="color:#666;">正在生成AI总结……</span>`;
        // 全程保持不可编辑，避免样式变化
        contentDiv.setAttribute("contenteditable", "false");
        
        let rawContent = "";
        const encodedPath = encodeURIComponent(pathName);
        const apiUrl = `${SUMMARY_API_BASE}/summary/${encodedPath}`;

        const eventSource = new EventSource(apiUrl);

        eventSource.onmessage = (event) => {
            if (event.data === "[DONE]") {
                // 生成完成后仍保持不可编辑，避免样式变化
                contentDiv.setAttribute("contenteditable", "false");
                eventSource.close();
                return;
            }
            
            if (event.data === "[ERROR]") {
                contentDiv.innerHTML = `<span style="color:#e53e3e;">AI总结生成失败</span>`;
                eventSource.close();
                return;
            }
            
            // 只处理摘要内容，过滤服务端提示
            if (!event.data.startsWith("验证Wiki.js") && 
                !event.data.startsWith("正在查找页面") &&
                !event.data.startsWith("页面内容获取成功") &&
                !event.data.startsWith("===") &&
                !event.data.startsWith("正在生成...")) {
                
                rawContent += event.data;
                const parsedContent = parseMarkdown(rawContent);
                contentDiv.innerHTML = parsedContent;
                contentDiv.scrollTop = contentDiv.scrollHeight;
            }
        };

        eventSource.onerror = (error) => {
            contentDiv.innerHTML = `<span style="color:#e53e3e;">无法连接到AI服务</span>`;
            eventSource.close();
            console.error("Summary API error:", error);
        };

        return eventSource;
    }

    /**
     * 主函数（移除双击重新生成功能）
     */
    (async function main() {
        try {
            const container = await waitForContent();
            const summaryElements = renderSummaryPanel(container);
            if (!summaryElements) return;

            // 首次加载（无双击重新生成功能）
            let eventSource = loadSummaryStream(path, summaryElements.content);

            // 彻底移除双击事件绑定代码

        } catch (e) {
            console.warn("wikijs summary panel error:", e);
        }
    })();
})();
