
const header = document.getElementById('main-header');
header.style.borderBottom ='solid 3px black' ;


document.querySelector('.list-group-item:nth-child(2)').style.background = 'green';

document.querySelector('.list-group-item:nth-child(3)').style.display = 'none';
document.querySelectorAll('.list-group-item')[1].style.color = 'green'
const odd = document.querySelectorAll('li:nth-child(odd)') ;

for(let i = 0 ; i <odd.length ; i++){
    
   odd[i].style.background ='green';
   
}




