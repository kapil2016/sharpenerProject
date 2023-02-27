const username = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const date = document.querySelector("#date");
const time = document.querySelector("#time");
const forminputs = document.querySelectorAll(".form-control");
document.querySelector("#submitbtn").addEventListener("click", (e) => {
    let userDetailesString = ""
    const ul = document.getElementById('items') ;
    const li = document.createElement('li');
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
    localStorage.setItem(userDetailes.email , JSON.stringify(userDetailes));
    li.className = 'list-group-item' ;
    li.innerText = `${userDetailes.name} ${userDetailes.email} ${userDetailes.phone} ${userDetailes.date} ${userDetailes.time}`
    ul.appendChild(li);
    
  }
});
