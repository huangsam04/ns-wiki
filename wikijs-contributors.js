window.addEventListener("load", () => {
  (async () => {
    const wait = (ms) => new Promise((r) => setTimeout(r, ms));
    for (let tries = 0; tries < 10; tries++) {
      const e = document.currentScript || document.querySelector('script[data-api-endpoint]');
      const t = e?.dataset.apiEndpoint || "https://nswiki.cn/contributors";
      const n = window.location.pathname.replace(/^\//, "");
      const a = n.replace(/^[a-z]{2}\//, "");
      const o = (n.match(/^([a-z]{2})\//) || [])[1] || "en";
      try {
        const r = document.querySelector("main") || document.querySelector("#content") || document.body;
        if (!r) { await wait(500); continue }
        const i = await fetch(`${t}?path=${encodeURIComponent(a || 'home')}&locale=${o}`);
        const c = await i.json();
        if (!i.ok || c.error) return void console.warn("wikijs-contributors 请求失败:", c.error || i.statusText);
        const s = c.contributors || [];
        if (s.length === 0) return;
        const l = r.querySelector(".contents, .page-contents, article") || r;
        if (!l || l.querySelector(".wiki-contributors")) return;

        const d = document.createElement("hr");
        d.style.cssText = "margin:2rem 0 1rem 0;border:none;border-top:1px solid #ddd;";
        d.className = "wiki-contributors";

        const p = document.createElement("p");
        p.style.cssText = "color:#444;font-size:1rem;margin-top:1rem;line-height:1.6;";
        p.className = "wiki-contributors";

        const h = document.createElement("strong");
        h.textContent = "贡献者";
        h.style.cssText = "color:#222;font-weight:600;margin-right:0.25rem;";

        const u = document.createTextNode("（按时间顺序）：");
        const m = document.createTextNode(s.join("、"));

        p.appendChild(h);
        p.appendChild(u);
        p.appendChild(m);
        l.appendChild(d);
        l.appendChild(p);
        break;
      } catch (e) {
        if (tries === 9) console.error("wikijs-contributors 错误:", e);
        await wait(500);
      }
    }
  })();
});
