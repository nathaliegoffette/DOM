const ol = document.querySelector('ol')
const a = ol.children[4]
ol.insertBefore(a, ol.children[0]);



const main = document.querySelector('main');

const section2 = main.children[1];
const t2 = section2.firstElementChild;
const p2 = section2.lastElementChild;

const section3 = main.lastElementChild;
const div3 = section3.firstElementChild;

const t3 = div3.firstElementChild;
const p3 = div3.lastElementChild;

p2.before(t3);
p3.before(t2);


main.removeChild(section3);





/*const section = document.querySelectorAll('section');

const section3 = section[2].firstElementChild;
console.log(section3);
const t2 = section[1].firstElementChild;
console.log(t2);
const t3 = section3.children[0];
console.log(t3);
const h22 = section2.children[0];
console.log(h22);
t2.insertBefore(t3, t2[0]);
t2.insertBefore(section3)
*/

