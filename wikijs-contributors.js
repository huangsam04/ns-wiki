// Wiki.js 贡献者显示脚本
// 从 window.WIKI_CONFIG 读取配置
(async () => {
  // 读取配置
  // 从 script 标签的 data 属性读取
  const scriptTag = document.currentScript || document.querySelector('script[data-api-key]');
  const apiKey = scriptTag?.dataset.apiKey;
  const graphqlUrl = scriptTag?.dataset.graphqlUrl || window.location.origin + "/graphql";
  
  if (!apiKey) {
    console.error("wikijs-contributors 未配置 API Key，请在 Wiki.js 后台设置");
    return;
  }
  
  // 获取当前页面路径（去掉前导斜杠）
  const pagePath = window.location.pathname.replace(/^\//, "");
  
  // 去掉语言前缀（如果有）
  const normalizedPath = pagePath.replace(/^[a-z]{2}\//, "");
  
  // 从路径提取语言代码（如果有）
  const localeMatch = pagePath.match(/^([a-z]{2})\//);
  const locale = localeMatch ? localeMatch[1] : "en";
  
  try {
    // 1️⃣ 查询所有页面列表，找到目标页面 ID
    const listRes = await fetch(graphqlUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        query: `
          query {
            pages {
              list {
                id
                path
                title
                locale
              }
            }
          }
        `
      })
    });
    
    const listJson = await listRes.json();
    
    if (listJson.errors) {
      console.error("wikijs-contributors GraphQL 错误:", listJson.errors);
      return;
    }
    
    const pages = listJson.data?.pages?.list || [];
    
    // 匹配页面（考虑 locale）
    const target = pages.find(p => 
      p.path === normalizedPath && p.locale === locale
    );
    
    if (!target) {
      return;
    }
    
    const pageId = target.id;
    //console.log("找到页面:", target.title, `(ID: ${pageId})`);
    
    // 2️⃣ 查询页面历史
    const historyRes = await fetch(graphqlUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        query: `
          query {
            pages {
              history(id: ${pageId}, offsetPage: 0, offsetSize: 100) {
                trail {
                  versionId
                  versionDate
                  authorName
                  actionType
                }
              }
            }
          }
        `
      })
    });
    
    const historyJson = await historyRes.json();
    
    if (historyJson.errors) {
      console.error("wikijs-contributors GraphQL 错误:", historyJson.errors);
      return;
    }
    
    const trail = historyJson.data?.pages?.history?.trail || [];
    
    if (trail.length === 0) {
      return;
    }
    
    // 3️⃣ 按时间排序并提取作者名字（去重，保留首次出现顺序）
    const sortedTrail = trail.sort((a, b) => 
      new Date(a.versionDate) - new Date(b.versionDate)
    );
    
    const contributorsInOrder = [];
    const seen = new Set();
    
    for (const entry of sortedTrail) {
      if (entry.authorName && !seen.has(entry.authorName)) {
        contributorsInOrder.push(entry.authorName);
        seen.add(entry.authorName);
      }
    }

    // 4️⃣ 在文章内容末尾添加贡献者文本
    const mainElement = document.querySelector("main");
    
    if (!mainElement) {
      return;
    }
    
    // 查找文章内容容器
    const contentContainer = mainElement.querySelector('.contents, .page-contents, article') || mainElement;
    
    // 检查是否已经添加过贡献者信息（避免重复）
    if (contentContainer.querySelector('.wiki-contributors')) {
      return;
    }
    
    // 创建分隔线
    const hr = document.createElement("hr");
    hr.style.cssText = "margin: 2rem 0 1rem 0; border: none; border-top: 1px solid #ddd;";
    hr.className = "wiki-contributors";
    
    // 创建贡献者段落
    const contributorsParagraph = document.createElement("p");
    contributorsParagraph.style.cssText = "color: #666; font-size: 0.9rem; margin-top: 1rem;";
    contributorsParagraph.className = "wiki-contributors";
    
    // 创建"贡献者"标签
    const label = document.createElement("strong");
    label.textContent = "贡献者";
    label.style.cssText = "color: #333;";
    
    // 创建说明文字
    const description = document.createTextNode("（按时间顺序）：");
    
    // 创建贡献者名单
    const contributors = document.createTextNode(contributorsInOrder.join('、'));
    
    // 组装
    contributorsParagraph.appendChild(label);
    contributorsParagraph.appendChild(description);
    contributorsParagraph.appendChild(contributors);
    
    // 添加到内容末尾
    contentContainer.appendChild(hr);
    contentContainer.appendChild(contributorsParagraph);

  } catch (err) {
    console.error("wikijs-contributors 请求失败:", err);
  }
})();