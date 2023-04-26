const getScrollPercent = () => {
  const scrolled = window.scrollY;
  console.log(`${scrolled} スクロール`);
}

window.addEventListener('scroll', getScrollPercent);