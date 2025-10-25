(async () => {
  const scriptTag = document.currentScript || document.querySelector('script[data-api-endpoint]');
  const apiEndpoint = scriptTag?.dataset.apiEndpoint || "/api/contributors";

  // 获取当前页面路径与语言
  const pagePath = window.location.pathname.replace(/^\//, "");
  const normalizedPath = pagePath.replace(/^[a-z]{2}\//, "");
  const localeMatch = pagePath.match(/^([a-z]{2})\//);
  const locale = localeMatch ? localeMatch[1] : "en";

  try {
    const res = await fetch(`${apiEndpoint}?path=${encodeURIComponent(normalizedPath)}&locale=${locale}`);
    const data = await res.json();

    if (!res.ok || data.error) {
      console.warn("wikijs-contributors 请求失败:", data.error || res.statusText);
      return;
    }

    const contributors = data.contributors || [];
    if (contributors.length === 0) return;

    // 插入页面内容
    const mainElement = document.querySelector("main");
    const contentContainer = mainElement?.querySelector('.contents, .page-contents, article') || mainElement;
    if (!contentContainer || contentContainer.querySelector('.wiki-contributors')) return;

    // 分隔线
    const hr = document.createElement("hr");
    hr.style.cssText = "margin: 2rem 0 1rem 0; border: none; border-top: 1px solid #ddd;";
    hr.className = "wiki-contributors";

    // 文本
    const contributorsParagraph = document.createElement("p");
    contributorsParagraph.style.cssText = "color: #666; font-size: 0.9rem; margin-top: 1rem;";
    contributorsParagraph.className = "wiki-contributors";

    const label = document.createElement("strong");
    label.textContent = "贡献者";
    label.style.cssText = "color: #333;";

    const description = document.createTextNode("（按时间顺序）：");
    const names = document.createTextNode(contributors.join('、'));

    contributorsParagraph.appendChild(label);
    contributorsParagraph.appendChild(description);
    contributorsParagraph.appendChild(names);

    contentContainer.appendChild(hr);
    contentContainer.appendChild(contributorsParagraph);
  } catch (err) {
    console.error("wikijs-contributors 网络错误:", err);
  }
})();
