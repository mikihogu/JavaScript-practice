const text = document.querySelector('#text');
const count = document.querySelector('#count');

text.addEventListener('keyup', () => {
  count.textContent = text.value.length;

  if (text.value.length > 20) {
    count.classList.add('alert');
  } else {
    count.classList.remove('alert');
  }
});