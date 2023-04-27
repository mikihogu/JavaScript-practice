const getScrollPercent = () => {
  const scrolled = window.scrollY;
  // console.log(`${scrolled} スクロール`);

  //ページの高さ
  const pageHeight = document.documentElement.scrollHeight;
  //表示領域の高さ
  const viewHeight = document.documentElement.clientHeight;

  const percentage = scrolled / (pageHeight - viewHeight) * 100;
  console.log(percentage);
}

window.addEventListener('scroll', getScrollPercent);