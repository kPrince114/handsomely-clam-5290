let burger=document.querySelector(".hamburger");
let slider=document.querySelector("#slider");
let close=document.querySelector("#close");

burger.addEventListener("click", function(){
slider.style.display="block";
console.log("abjsk")
});


close.addEventListener("click", function(){
    slider.style.display="none";
    
});



let button= document.querySelector(".button").addEventListener("click", function(){

window.location.href="search.html";

})


