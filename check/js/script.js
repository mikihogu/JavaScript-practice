const isAgreed = document.querySelector('#check');
const btn = document.querySelector('#btn');

isAgreed.addEventListener('change', () => {
  if (isAgreed.checked === true) {    //✔︎が付いている場合
    btn.disabled = false;   //ボタン無効化していない
  } else {      //✔︎が付いていない場合
    btn.disabled = true;      //ボタン無効化している
  }
});

