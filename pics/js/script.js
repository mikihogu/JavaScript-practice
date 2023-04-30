const menu = document.querySelector('#menu');

const lists = [
  '001.JPG',
  '002.JPG',
  '003.JPG',
  '004.JPG',
  '005.JPG',
  '006.JPG',
];
// console.log(lists[2]);

const content = `<div><img src="images/${lists[0]}" alt=""></div>
  <div><img src="images/${lists[1]}" alt=""></div>
  <div><img src="images/${lists[2]}" alt=""></div>
  <div><img src="images/${lists[3]}" alt=""></div>
  <div><img src="images/${lists[4]}" alt=""></div>
  <div><img src="images/${lists[5]}" alt=""></div>
`; 
// const content = `<div><img src="images/001.JPG" alt=""></div>`;
menu.insertAdjacentHTML('beforeend', content);

