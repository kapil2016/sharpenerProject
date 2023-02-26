const submitbtn = document.getElementById('submitbtn')
submitbtn.addEventListener('click',(e)=>{
   e.preventDefault();
   const forminput = document.getElementById('forminput') ;
   const ul = document.getElementById('items') ;
   const li = document.createElement('li');
   const deletebtn = document.createElement('button');
   const editbtn = document.createElement('button');
   editbtn.type = 'button';
   editbtn.textContent = 'edit';
   editbtn.className = 'btn btn-success btn-sm float-right edit mr-3';
   
   deletebtn.type = 'button' ;
   deletebtn.textContent = 'delete' ;
   deletebtn.className = 'btn btn-danger btn-sm float-right delete'
   li.className = 'list-group-item' ;
   li.textContent = forminput.value ;
   
   li.appendChild(deletebtn);
   li.appendChild(editbtn);
   ul.appendChild(li) ;
   forminput.value = '' ;

   
} )

const list = document.querySelector('#items');
list.addEventListener('click' , (e)=>{
   if (e.target.classList.contains('delete')){
      if (confirm("are you sure")){
      let li = e.target.parentElement ;
      list.removeChild(li); 
      }
     
   }
   
})


