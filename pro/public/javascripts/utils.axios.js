//const { default: axios } = require("axios");

//const { default: axios } = require("axios")


const button = document.getElementById('submit');

button.addEventListener('click',submit);

function  submit (){

  axios.post("/users/info",{
    params : { id : "test" }
  })
  .then((res)=>{
    console.log(res);
    call(res);
  })
  .catch((error)=>{
    console.log(error);
  })

}


function call (res){
  console.log(res);
}