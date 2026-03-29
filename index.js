/*
  index.html にある「雲のオーバーレイ要素」を取得します
  id="cloudOverlay" のHTML要素を探して、cloudOverlay という変数に入れます
*/
const cloudOverlay = document.getElementById("cloudOverlay");

/*
  main.html には cloudOverlay が存在しません
  そのため、「その要素があるときだけ処理する」ようにしています
  これを書かないと main.html でエラーになる可能性があります
*/
if (cloudOverlay) {
  /*
    isAnimating:
    すでに雲が消え始めているかどうかを管理する変数です
    連打による二重実行を防ぎます
  */
  let isAnimating = false;

  /*
    isRedirecting:
    すでにページ遷移を始めたかどうかを管理します
    transitionend と setTimeout の両方から遷移しようとしても
    1回だけにするための保険です
  */
  let isRedirecting = false;

  /* 遷移先のページ名です */
  const nextPage = "main.html";

  /*
    雲を消し始める関数です
    クリック時もキーボード操作時も、この同じ関数を使います
  */
  function startTransition() {
    /* すでにアニメーション中なら何もしない */
    if (isAnimating) return;

    /* 実行済みフラグを立てる */
    isAnimating = true;

    /*
      fade-out というクラスを追加します
      実際の「ふわっと消える見た目」は CSS に書かれています
    */
    cloudOverlay.classList.add("fade-out");

    /*
      もし何らかの理由で transitionend が発火しなくても、
      確実にページ遷移するための保険です
      1600ミリ秒 = 1.6秒
    */
    setTimeout(() => {
      if (!isRedirecting) {
        isRedirecting = true;
        window.location.href = nextPage;
      }
    }, 1600);
  }

  /*
    雲をクリックしたら startTransition() を実行します
    スマホのタップでも click イベントとして反応します
  */
  cloudOverlay.addEventListener("click", startTransition);

  /*
    キーボードの Enter または Space でも操作できるようにします
    アクセシビリティ向上のための対応です
  */
  cloudOverlay.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault(); // Spaceキーで画面がスクロールしないようにする
      startTransition();
    }
  });

  /*
    CSS の transition が終わったときに呼ばれるイベントです
    opacity の変化が終わったタイミングで本画面へ移動します
  */
  cloudOverlay.addEventListener("transitionend", (event) => {
    /*
      opacity 以外にも transform や filter に対して transitionend が発生するので、
      透明化が終わったときだけ反応するようにします
    */
    if (event.propertyName !== "opacity") return;

    /* すでに遷移済みなら何もしない */
    if (isRedirecting) return;

    /* 遷移開始 */
    isRedirecting = true;
    window.location.href = nextPage;
  });
}
