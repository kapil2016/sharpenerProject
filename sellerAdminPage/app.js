const crudcrudid = 'ffb75201c9854a7cab354075aaf769d4' ;
const crudApiurl = `https://crudcrud.com/api/${crudcrudid}/`;

async function getDataFromCrud(url,category){
  try {
    const respones = await axios.get(`${url}${category}`) ;
    respones.data.forEach(item => {
    listItems(item,category);
  });
  } catch (error) {
    console.log(error)
  }
  
}
window.addEventListener('DOMContentLoaded',()=>{
  getDataFromCrud(crudApiurl,'electronic');
  getDataFromCrud(crudApiurl,'skincare');
  getDataFromCrud(crudApiurl,'foodItems');
})

const forminputs = document.querySelectorAll(".form-control");
const amount = forminputs[0]
const product = forminputs[1]
const category = forminputs[2]

function listItems(itemDetails , itemCategory){
    const ul = document.getElementById(`${itemCategory}`) ;
    const li = document.createElement('li');
    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'delete' ;
    deletebtn.className = 'btn btn-danger btn-sm delete'
    deletebtn.style.float = 'right' ;
    li.className = 'list-group-item' ;
    li.id = itemDetails._id ;
    li.innerText = `${itemDetails.amount} | ${itemDetails.product} | ${itemDetails.choose_category}`
    li.appendChild(deletebtn);
    ul.appendChild(li);
}

document.querySelector("#submitbtn").addEventListener("click", (e) => {   
  e.preventDefault();
  if (
    amount.value != "" &&
    product.value != "" &&
    category.value != "" 
    
  ) {
    let itemDetails = {};
    itemDetails[forminputs[0].name] = forminputs[0].value ;
    itemDetails[forminputs[1].name] = forminputs[1].value ;
    itemDetails['choose_category'] = forminputs[2].value;
   // itemDetails['id'] = uniqueid ;
    for (let item of forminputs) {
        item.value = '' ;
     }
   let category = itemDetails.choose_category ;
   //listItems(itemDetails,category) ;
   axios({
    method:'post',
    url:`${crudApiurl}${category}`,
    data:itemDetails
  }).then((res)=>{
    axios.get(`${crudApiurl}${category}/${res.data._id}`)
    .then((res)=>listItems(res.data , category));
  })
     
   
  }
});

const listelectronic = document.querySelector('#electronic');
const listskincare = document.querySelector('#skincare');
const listfood = document.querySelector('#foodItems');

listelectronic.addEventListener('click' , (e)=>{
   if (e.target.classList.contains('delete')){
      if (confirm("are you sure")){
      let li = e.target.parentElement ;
      axios.delete(`${crudApiurl}electronic/${li.id}`)
      .then(res => {
        listelectronic.removeChild(li); 
        console.log(res)
      })
      .catch(err => {
        console.error(err); 
      })
      } 

      }
   } 
);

listskincare.addEventListener('click' , (e)=>{
  if (e.target.classList.contains('delete')){
     if (confirm("are you sure")){
     let li = e.target.parentElement ;
     axios.delete(`${crudApiurl}skincare/${li.id}`)
     .then(res => {
       listskincare.removeChild(li); 
       console.log(res)
     })
     .catch(err => {
       console.error(err); 
     })

     }
  }  
});

listfood.addEventListener('click' , (e)=>{
  if (e.target.classList.contains('delete')){
     if (confirm("are you sure")){
     let li = e.target.parentElement ;
     axios.delete(`${crudApiurl}foodItems/${li.id}`)
      .then(res => {
        listfood.removeChild(li); 
        console.log(res)
      })
      .catch(err => {
        console.error(err); 
      })
     }
  }  
})





