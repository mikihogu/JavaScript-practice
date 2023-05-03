const menu = document.querySelector('#menu');

const lists = [
  '001.JPG',
  '002.JPG',
  '003.JPG',
  '004.JPG',
  '005.JPG',
  '006.JPG',
];
console.log(lists.length);

for(let i = 0; i < 6; i++){
  const content = `<div><img src="images/${lists[i]}" alt=""></div>`;
  menu.insertAdjacentHTML('beforeend', content);
}
