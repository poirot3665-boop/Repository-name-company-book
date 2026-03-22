// =========================
// ページ読み込み時の演出
// =========================
window.onload = () => {

  const hero = document.querySelector(".hero");

  // ▼ 少し待って「雲の中」感を出す
  setTimeout(() => {
    hero.classList.add("open"); // 雲が消える
  }, 1000);

  // ▼ ロゴとボタン出現
  setTimeout(() => {
    hero.classList.add("show");
  }, 1800);

};

// =========================
// ボタン押下時
// =========================
function enterSite() {

  // ▼ 本番では別ページへ遷移
  window.location.href = "main.html";

}