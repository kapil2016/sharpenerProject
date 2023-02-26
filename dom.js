
const header = document.getElementById('main-header');
header.style.borderBottom ='solid 3px black' ;
// const items = document.getElementsByClassName('list-group-item') ;
// for(const item of items){
//     item.style.fontWeight = 'bold' ;
//     item.style.backgroundColor ='gray' ;
// }
const items = document.getElementsByTagName('li') ;
for(const item of items){
    item.style.fontWeight = 'bold' ;
    item.style.backgroundColor ='gray' ;
}



