/*
  DOMContentLoaded
  HTMLの読み込み完了後に実行される。

  これを書かないと、
  HTML要素がまだ存在しない状態で
  JavaScriptが動いてしまう事がある。
*/
document.addEventListener('DOMContentLoaded', () => {

  const papers = document.querySelectorAll('.paper');

  papers.forEach(paper => {

    const randomRotate =
      (Math.random() * 8 - 4).toFixed(1);

    paper.style.transform =
      `rotate(${randomRotate}deg)`;


    // ========================================
    // 紙クリックイベント
    // ========================================

    paper.addEventListener('click', () => {

      /* 紙内部の h3 を取得。 */
      const title =
        paper.querySelector('h3').textContent;

      /*要素内のテキストを取得。*/
      const content =
        paper.textContent;

      /*
        alert()

        ポップアップ表示。

        ` ` はテンプレートリテラル。
        ${変数} を埋め込める。
      */
      alert(
`【${title}】

${content}

── S-system より ──`
      );

    });

  });


  // ========================================
  // ナツ画像の演出
  // ========================================

  /*
    .natsu 要素取得
  */
  const natsu =
    document.querySelector('.natsu');

  /*
    要素存在確認

    if (natsu)
    → 存在した場合のみ実行
  */
  if (natsu) {

    // ========================================
    // マウスが乗った時
    // ========================================

    natsu.addEventListener('mouseenter', () => {

      /*
        scale()
        → 拡大

        rotate()
        → 回転
      */
      natsu.style.transform =
        'scale(1.12) rotate(5deg)';

    });


    // ========================================
    // マウス離脱時
    // ========================================

    natsu.addEventListener('mouseleave', () => {

      /*
        元サイズへ戻す
      */
      natsu.style.transform =
        'scale(1)';

    });

  }

// ========================================
// S-SYSTEM ロゴ演出
// ========================================

const logo =
  document.querySelector('.company-logo');

/*
  ロゴが存在する場合のみ実行
*/
if (logo) {

  // ======================================
  // マウスを乗せた時
  // ======================================

  logo.addEventListener('mouseenter', () => {

    /*
      少し回転して浮く演出
    */
    logo.style.transform =
      'scale(1.08) rotate(-2deg)';

  });


  // ======================================
  // マウスが離れた時
  // ======================================

  logo.addEventListener('mouseleave', () => {

    /*
      元へ戻す
    */
    logo.style.transform =
      'scale(1) rotate(0deg)';

  });

}


  // ========================================
  // 隠し演出（キーボード）
  // ========================================

  /*
    keydown

    キーボード押下時。
  */
  document.addEventListener('keydown', (e) => {

    /*
      e.key

      押されたキーを判定。

      r または R なら実行。
    */
    if (e.key === 'r' || e.key === 'R') {

      /*
        全紙にランダム移動演出
      */
      papers.forEach(paper => {

        /*
          X方向ランダム値
        */
        const randX =
          (Math.random() * 40 - 20).toFixed(1);

        /*
          Y方向ランダム値
        */
        const randY =
          (Math.random() * 30 - 15).toFixed(1);

        /*
          transform アニメーション速度
        */
        paper.style.transition =
          'transform 0.6s';

        /*
          rotate()
          → 回転

          translate()
          → 移動
        */
        paper.style.transform =
          `rotate(${randX}deg)
           translate(${randX}px, ${randY}px)`;

      });

    }

  });

});

// =============================================
// このファイルは追加
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    const papers = document.querySelectorAll('.paper');

    papers.forEach(paper => {
        // 紙を少し傾ける
        const randomRotate = (Math.random() * 8 - 4).toFixed(1);
        paper.style.transform = `rotate(${randomRotate}deg)`;

        // クリック処理
        paper.addEventListener('click', () => {
            const title    = paper.dataset.title    || 'メニュー詳細';
            const subtitle = paper.dataset.subtitle || '';   // ← これが重要
            const price    = paper.dataset.price    || '';
            const detail   = paper.dataset.detail   || '詳細情報は準備中です。';

            showDetailModal(title, subtitle, price, detail);
        });
    });
});

// 詳細モーダル表示関数
function showDetailModal(title, subtitle, price, detail) {
    const existing = document.getElementById('detail-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'detail-modal';

    modal.innerHTML = `
        <div class="modal-content">
            <h2>${title}</h2>
            
            <!-- サブタイトル（ここを強化） -->
            ${subtitle ? `<h3 style="color: #3d2a1f; text-align: center; margin: 10px 0 20px 0;">${subtitle}</h3>` : ''}
            
            <!-- 料金 -->
            ${price ? `<p class="price">${price}</p>` : ''}
            
            <!-- 詳細説明 -->
            <div class="detail-box">
                ${detail.replace(/\n/g, '<br>')}
            </div>

            <div style="text-align: center; margin-top: 30px;">
                <button onclick="this.closest('#detail-modal').remove()" 
                        class="close-button">
                    閉じる
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}