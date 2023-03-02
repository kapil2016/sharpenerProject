const uniqueid = Date.now();
const forminputs = document.querySelectorAll(".form-control");
const amount = forminputs[0]
const discription = forminputs[1]
const category = forminputs[2]
function listuser(userDetailes){
    const ul = document.getElementById('items') ;
    const li = document.createElement('li');
    const deletebtn = document.createElement('button');
    const editbtn = document.createElement('button');
    editbtn.type = 'button';
    editbtn.textContent = 'edit';
    editbtn.className = 'btn btn-success btn-sm edit';
    deletebtn.type = 'button' ;
    deletebtn.textContent = 'delete' ;
    deletebtn.className = 'btn btn-danger btn-sm delete'
    deletebtn.style.float = 'right' ;
    editbtn.style.float = 'right' ;
    editbtn.style.marginLeft = '20px' ;
    li.className = 'list-group-item' ;
    li.id = userDetailes.id ;
    li.innerText = `${userDetailes.amount} | ${userDetailes.discription} | ${userDetailes.choose_category}`
    li.appendChild(editbtn);
    li.appendChild(deletebtn);
    ul.appendChild(li);
}

document.querySelector("#submitbtn").addEventListener("click", (e) => {   
  e.preventDefault();
  if (
    amount.value != "" &&
    discription.value != "" &&
    category.value != "" 
    
  ) {
    let userDetailes = {};
    userDetailes[forminputs[0].name] = forminputs[0].value ;
    userDetailes[forminputs[1].name] = forminputs[1].value ;
    userDetailes['choose_category'] = forminputs[2].value;
    userDetailes['id'] = uniqueid ;
    for (let item of forminputs) {
        item.value = '' ;
     }
    listuser(userDetailes) ;
    localStorage.setItem( userDetailes.id, JSON.stringify(userDetailes));
     
   
  }
});

for (let i = 0 ; i < localStorage.length ; i++){
    let userDetailes = JSON.parse(localStorage.getItem(localStorage.key(i)))
    listuser(userDetailes);
}
const list = document.querySelector('#items');
list.addEventListener('click' , (e)=>{
   if (e.target.classList.contains('delete')){
      if (confirm("are you sure")){
      let li = e.target.parentElement ;
      let key = li.id ;
      localStorage.removeItem(key);
      list.removeChild(li); 
      }
   }  
})
list.addEventListener('click' , (e)=>{
    if (e.target.classList.contains('edit')){
        if (confirm("are you sure")){
       let li = e.target.parentElement ;
       let childs = li.firstChild.nodeValue
       let values = childs.split(' | ') ;
       let key = li.id ;
       amount.value = values[0]
       discription.value =values[1]
       category.value = values[2]
       console.log(childs)
       localStorage.removeItem(key);
       list.removeChild(li); }
       
   }  
 })



