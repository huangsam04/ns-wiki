(()=>{const trusted=[/^(.*\.)?nswiki\.cn$/,/^(.*\.)?awa\.cool$/];
function isTrusted(u){try{return trusted.some(p=>p.test(new URL(u,location.origin).hostname))}catch{return!0}}
function createDialog(url){
  const overlay=document.createElement("div");
  overlay.style.cssText=`
    position:fixed;inset:0;z-index:9999;
    background:rgba(255,255,255,0.65);
    backdrop-filter:blur(8px);
    display:flex;align-items:center;justify-content:center;
    animation:fadeIn .25s ease-out;
  `;
  const box=document.createElement("div");
  box.style.cssText=`
    background:#fff;color:#222;border-radius:16px;
    box-shadow:0 8px 40px rgba(0,0,0,0.15);
    max-width:440px;width:90%;
    padding:28px 32px;text-align:center;
    font-family:'Inter','Segoe UI',sans-serif;
    transform:scale(0.9);opacity:0;
    animation:popIn .25s ease-out forwards;
  `;
  box.innerHTML=`
    <h2 style="margin:0 0 10px;font-size:20px;font-weight:600;color:#111;">⚠️ 即将离开本站</h2>
    <p style="font-size:14px;line-height:1.6;color:#555;">
      您即将前往外部网站：<br>
      <span style="color:#0078ff;word-break:break-all;">${url}</span><br><br>
      请确认该链接安全后再访问。
    </p>
    <div style="margin-top:20px;display:flex;justify-content:center;gap:14px;">
      <button id="cancelBtn" style="
        padding:8px 20px;border:1px solid #ddd;border-radius:8px;
        background:#f9f9f9;color:#333;cursor:pointer;font-size:14px;
        transition:all .15s;">取消</button>
      <button id="goBtn" style="
        padding:8px 20px;border:none;border-radius:8px;
        background:#0078ff;color:#fff;cursor:pointer;font-size:14px;
        transition:all .15s;">继续访问</button>
    </div>
  `;
  overlay.appendChild(box);
  document.body.appendChild(overlay);

  // 动画定义
  const style=document.createElement("style");
  style.textContent=`
  @keyframes fadeIn{from{opacity:0}to{opacity:1}}
  @keyframes popIn{from{transform:scale(.9);opacity:0}to{transform:scale(1);opacity:1}}
  @keyframes fadeOut{from{opacity:1}to{opacity:0}}
  @keyframes popOut{from{transform:scale(1);opacity:1}to{transform:scale(.9);opacity:0}}
  `;
  document.head.appendChild(style);

  const closeDialog=()=>{
    box.style.animation="popOut .2s ease-in forwards";
    overlay.style.animation="fadeOut .2s ease-in forwards";
    setTimeout(()=>overlay.remove(),180);
  };

  box.querySelector("#cancelBtn").onclick=closeDialog;
  box.querySelector("#goBtn").onclick=()=>{window.open(url,"_blank");closeDialog();};
}
document.addEventListener("click",ev=>{
  const a=ev.target.closest("a");
  if(!a||!a.href||a.href.startsWith("#")||a.href.startsWith("javascript:"))return;
  if(!isTrusted(a.href)){
    ev.preventDefault();
    createDialog(a.href);
  }
},!0);
})();
