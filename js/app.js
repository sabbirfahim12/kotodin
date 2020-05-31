const elementColor=['red','black','green','yellow'];
const body=document.querySelector('body');
const btn=document.getElementById("btn");
body.style.backgroundColor='violet'
btn.addEventListener("click",function(){
const colorIndex=parseInt(Math.random()*elementColor.length) ;
 const bodyb=body.style.backgroundColor=elementColor[colorIndex];
  console.log(bodyb)
})
