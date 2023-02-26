
// const header = document.getElementById('main-header');
// header.style.borderBottom ='solid 3px black' ;


// document.querySelector('.list-group-item:nth-child(2)').style.background = 'green';

// document.querySelector('.list-group-item:nth-child(3)').style.display = 'none';
// document.querySelectorAll('.list-group-item')[1].style.color = 'green'
// const odd = document.querySelectorAll('li:nth-child(odd)') ;

// for(let i = 0 ; i <odd.length ; i++){
    
//    odd[i].style.background ='green';
   
// }
const listitems = document.querySelector('#items');
// console.log(listitems);
// console.log(listitems.parentElement);
// console.log(listitems.lastElementChild);
// console.log(listitems.lastChild);
// console.log(listitems.firstElementChild);
// console.log(listitems.firstChild);
// console.log(listitems.nextSibling);
// console.log(listitems.nextElementSibling);
// console.log(listitems.previousSibling);
// console.log(listitems.previousElementSibling);
// const listitemchild = listitems.children[1];
// console.log(listitemchild);
const newelement = document.createElement('p');
newelement.className = 'hello';
newelement.textContent = 'hello world' ;
newelement.id = 'hello1';
const header = document.querySelector('header .container');
const h1 = document.querySelector('header h1');
header.insertBefore(newelement , h1);
newelement.style.fontSize = '25px'
//header.appendChild(newelement);
const newelement2 = document.createElement('li');
newelement2.className = 'list-group-item';
newelement2.textContent = 'hello world' ;


const itemlist = document.querySelector('#items');
itemlist.insertBefore(newelement2 , itemlist.firstElementChild);

console.log(itemlist);









