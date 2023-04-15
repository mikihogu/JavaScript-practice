const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

// カラーピッカーを操作した時の動作
const colorBg = () => {
  // 選択したカラーを背景色に設定
  document.body.style.backgroundColor = color.ariaValueMax;

  // カラーコードを表示
  if (color.value === '#ffffff') {
    text.textContent = `カラーコード： ${color.value} (white)`;
  } else if (color.value === '#000000') {
    text.textContent = `カラーコード： ${color.value} (black)`;
  } else {
    text.textContent = `カラーコード： ${color.value}`;
  }
}

// カラーピッカーが変更されたら colorBg を実行
color.addEventListener('input', colorBg);