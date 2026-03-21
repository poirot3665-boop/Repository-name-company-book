// 3Dキューブのアニメーション
const flyingBox = document.getElementById('flying-box');

function moveAndRotateBox() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // 画面幅に応じてキューブのサイズを動的に設定
    // 640px以下なら150px、それ以上なら200px
    const currentCubeSize = screenWidth <= 640 ? 150 : 200;

    // 画面の範囲内でランダムな位置を計算
    const randomX = Math.random() * (screenWidth - currentCubeSize);
    const randomY = Math.random() * (screenHeight - currentCubeSize);

    // ランダムな回転角度を計算
    const randomRotateX = Math.random() * 360;
    const randomRotateY = Math.random() * 360;
    const randomRotateZ = Math.random() * 360;

    // 位置と回転を同時に適用
    flyingBox.style.transform = `translate(${randomX}px, 
    ${randomY}px) rotateX(${randomRotateX}deg) rotateY(${randomRotateY}deg) rotateZ(${randomRotateZ}deg)`;
}

// 4秒ごとに位置と回転を変更
setInterval(moveAndRotateBox, 4000);

// 初回実行
moveAndRotateBox();

// ウィンドウサイズが変更されたときにも位置を再計算
window.addEventListener('resize', moveAndRotateBox);