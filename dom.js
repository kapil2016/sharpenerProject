
const header = document.getElementById('main-header');
header.style.borderBottom ='solid 3px black' ;
const items = document.getElementsByClassName('list-group-item') ;
for(const item of items){
    item.style.fontWeight = 'bold' ;
    item.style.color ='green' ;
}
items[2].style.backgroundColor ='green';
for(const item of items){
    item.style.fontWeight = 'bold' ;
    item.style.color ='gray' ;
}

