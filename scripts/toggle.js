



import navbar from "../components/navbar.js"


document.querySelector("#navbar").innerHTML = navbar();






let slider=document.querySelector("#slider");
let close=document.querySelector("#close");

document.getElementById("hamburger").addEventListener("click", function(){
slider.style.display="block";
console.log("abjsk")
});


close.addEventListener("click", function(){
    slider.style.display="none";
    
});



let button= document.querySelector(".button").addEventListener("click", function(){

window.location.href="exploresearch.html";

})


