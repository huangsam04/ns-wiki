(function () {
    "use strict";

    let hasContributedView = false;

    function isWikiViewPage() {
        const path = window.location.pathname;
        const blockedPrefixes = ["/e/", "/a/", "/p/", "/login/"];
        return !blockedPrefixes.some(p => path.startsWith(p));
    }
    if (!isWikiViewPage()) return;

    function parsePathAndLocale() {
        const raw = window.location.pathname.replace(/^\/+/, "");
        const match = raw.match(/^([a-z]{2})\/(.*)$/i);
        if (match) return { locale: match[1], path: match[2] || "home" };
        return { locale: "zh", path: raw || "home" };
    }
    const { path, locale } = parsePathAndLocale();

    function waitForContent() {
        return new Promise(resolve => {
            const timer = setInterval(() => {
                const el =
                    document.querySelector(".contents") ||
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

    function renderInfo(container, contributors, views) {
        if (container.querySelector(".wiki-contributors")) 
            return container.querySelector(".wiki-contributors");

        const hr = document.createElement("hr");
        hr.style.cssText = "margin:2rem 0 1rem;border:none;border-top:1px solid #ddd;";

        const p = document.createElement("p");
        p.className = "wiki-contributors";
        p.style.cssText = "color:#444;font-size:1rem;line-height:1.7;";

        const viewsLabel = document.createElement("strong");
        viewsLabel.textContent = "阅读量";
        const viewsText = document.createTextNode(`：${views}`);

        const contribLabel = document.createElement("strong");
        contribLabel.textContent = "贡献者（按时间顺序）";
        const contribText = document.createTextNode(`：${contributors.length ? contributors.join("、") : "暂无"}`);

        p.append(
            viewsLabel, viewsText,
            document.createTextNode("     |     "),
            contribLabel, contribText
        );

        container.append(hr, p);
        return viewsText; // 用于 +1 更新
    }

    function loadTurnstile(onSuccess, onFail) {
        if (hasContributedView) return;

        function render() {
            const box = document.createElement("div");
            box.style.display = "none";
            document.body.appendChild(box);

            turnstile.render(box, {
                sitekey: "0x4AAAAAACZR7_cxt7Z890mt",
                callback: token => {
                    fetch("/contributors/verify", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        credentials: "same-origin",
                        body: JSON.stringify({ token, path, locale })
                    })
                        .then(r => r.json())
                        .then(d => { 
                            if (d.ok) {
                                hasContributedView = true;
                                onSuccess(d);
                            } else onFail(d); 
                        })
                        .catch(onFail);
                }
            });
        }

        if (window.turnstile) render();
        else {
            const s = document.createElement("script");
            s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
            s.async = true;
            s.defer = true;
            s.onload = render;
            document.head.appendChild(s);
        }
    }

    (async function main() {
        try {
            const res = await fetch(`/contributors/?path=${encodeURIComponent(path)}&locale=${encodeURIComponent(locale)}`, {
                credentials: "same-origin"
            });
            const data = await res.json();
            if (!res.ok || data.error) return;

            const container = await waitForContent();
            const viewsTextNode = renderInfo(container, data.contributors || [], data.views || 0);

            if (!hasContributedView) {
                loadTurnstile(
                    () => { viewsTextNode.textContent += "(+1)"; },
                    () => { viewsTextNode.textContent += "(Turnstile 验证失败)"; }
                );
            }
        } catch (e) {
            console.warn("wikijs contributors error:", e);
        }
    })();
})();
