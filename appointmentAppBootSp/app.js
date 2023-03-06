const crudcrudid = '162f4317c48f49e1851e0898f113d6c7' ;
const crudApiurl = `https://crudcrud.com/api/${crudcrudid}/appointmentData`;
async function getDataFromCrud(url){
  const respones = await axios.get(url) ;
  respones.data.forEach(user => {
    listuser(user);
  });
}
getDataFromCrud(crudApiurl);
const username = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const date = document.querySelector("#date");
const time = document.querySelector("#time");
const forminputs = document.querySelectorAll(".form-control");
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
    li.innerText = `${userDetailes.name} | ${userDetailes.email} | ${userDetailes.phone} | ${userDetailes.date} | ${userDetailes.time}`
    li.appendChild(editbtn);
    li.appendChild(deletebtn);
    ul.appendChild(li);
}

document.querySelector("#submitbtn").addEventListener("click", (e) => {   
  e.preventDefault();
  if (
    username.value != "" &&
    email.value != "" &&
    phone.value != "" &&
    time != "" &&
    date != ""
  ) {
    const forminputs = document.querySelectorAll(".form-control");
    let userDetailes = {};
    for (let item of forminputs) {
       userDetailes[item.name] = item.value ;
       item.value = '' ;
    }
    // if (localStorage.getItem(userDetailes.email) == null){
    //     localStorage.setItem(userDetailes.email , JSON.stringify(userDetailes));
    //     listuser(userDetailes) ;
    // } else {
    //     alert('user already regesterd')
    // }
    axios({
      method:'post',
      url:crudApiurl,
      data:userDetailes
    }).then((res)=>{
      axios.get(`${crudApiurl}/${res.data._id}`).then((res)=>listuser(res.data));
    })
  }
});

// for (let i = 0 ; i < localStorage.length ; i++){
//     let userDetailes = JSON.parse(localStorage.getItem(localStorage.key(i)))
//     listuser(userDetailes);
// }
const list = document.querySelector('#items');
list.addEventListener('click' , (e)=>{
   if (e.target.classList.contains('delete')){
      if (confirm("are you sure")){
      let li = e.target.parentElement ;
      let key = li.innerText.split(" | ")[1];
     // localStorage.removeItem(key);
      list.removeChild(li); 
      }
   }  
})
list.addEventListener('click' , (e)=>{
    if (e.target.classList.contains('edit')){
       let li = e.target.parentElement ;
       let values = li.innerText.split(" | ");
       let key = values[1];
       username.value = values[0]
       email.value =values[1]
       phone.value = values[2]
       date.value = values[3]
       time.value = values[4]
       //localStorage.removeItem(key);
       list.removeChild(li); 
       
    }  
 })



