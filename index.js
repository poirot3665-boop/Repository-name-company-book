//const:再代入できない宣言
// IDが 'playButton' の<button>タグ（再生ボタン）を見つけて、`playButton`という箱に入れる。
 // IDが 'pauseButton' の<button>タグ（停止ボタン）を見つけて、`pauseButton`という箱に入れる。      
const myAudio = document.getElementById('myAudio');
const playButton = document.getElementById('playButton'); 
const pauseButton = document.getElementById('pauseButton'); 

// BGM再生ボタンがクリックされた時の動きを設定する
// `addEventListener('click', ...)` は、「このボタンがクリックされたら、中に書かれたことを実行して」という命令。
playButton.addEventListener('click', () => {
    myAudio.play(); // BGMの再生を開始。
// 開発者向けの「コンソール」にメッセージを表示して、ユーザーの画面には表示されない。
    console.log("BGMを再生しました。"); 
});

// BGM停止ボタンがクリックされた時の動きを設定する
pauseButton.addEventListener('click', () => {
    myAudio.pause(); // 一時停止します。
    // 開発者向けの「コンソール」にメッセージを表示。
    console.log("BGMを停止しました。"); 
});
