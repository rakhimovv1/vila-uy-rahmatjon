let sana = new Date();

console.log(`${sana.getDate()}.${sana.getMonth() +1}.${sana.getFullYear()}   `);
console.log(`soat: ${sana.getHours()}. ${sana.getMinutes()}. ${sana.getSeconds()}`);

let h1 = document.getElementById('h1')
let h2 = document.getElementById('h2')

h1.innerHTML = `${sana.getDate()}.${sana.getMonth() +1}.${sana.getFullYear()}`
h2.innerHTML = `soat: ${sana.getHours()}. ${sana.getMinutes()}. ${sana.getSeconds()}`


let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2')
let img3 = document.getElementById('img3')
let img4 = document.getElementById('img4')
let img5 = document.getElementById('img5')
let img6 = document.getElementById('img6')
let img7 = document.getElementById('img7')
let img8 = document.getElementById('img8')
let img9 = document.getElementById('img9')
let img10 = document.getElementById('img10')


img1.onclick = function () {
  img1.src = img2.src;
};
img2.onclick = function () {
  img2.src = img3.src;
};
img3.onclick = function () {
  img3.src = img1.src;
};
img4.onclick = function () {
    img4.src = img5.src;
  };
  img5.onclick = function () {
    img5.src = img7.src;
  };
  img6.onclick = function () {
    img6.src = img10.src;
  };
  img7.onclick = function () {
    img7.src = img9.src;
  };
  img8.onclick = function () {
    img8.src = img5.src;
  };