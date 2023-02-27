const username = document.querySelector("#name");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const date = document.querySelector("#date");
const time = document.querySelector("#time");
const forminputs = document.querySelectorAll(".form-control");
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
    for (const item of forminputs) {
        localStorage.setItem(item.name , item.value); 
        item.value = "";
    }
  }
});
