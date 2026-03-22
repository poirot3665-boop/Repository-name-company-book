// 役割：クリックされた瞬間に「アニメーション開始！」という合図を送ります
// 1. 画面上の「雲のレイヤー（id="entranceLayer"）」を探して、変数に入れます
const entranceLayer = document.getElementById('entranceLayer');

// 2. そのレイヤーがクリック（またはタップ）された時に実行する命令を書きます
entranceLayer.addEventListener('click', function () {

    // 3. CSSで作成した「is-open」というクラス（印）をレイヤーに追加します
    // これによって、CSSに書いた「拡大・透明・ボカシ」の動きがスタートします
    this.classList.add('is-open');

    // 確認用：ブラウザのコンソールにメッセージを出します
    console.log("シンプソンズ風のオープニングを開始しました！");
});