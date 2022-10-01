import navbar from "../components/navbar.js";
console.log(navbar)
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar()

const maindiv = document.getElementsByClassName("but");
let onclickfo=document.getElementById("onclickfo")
onclickfo.addEventListener("click",clickfo)
function clickfo() {
  maindiv[0].innerHTML = null;
  let div = document.createElement("div");
  let input = document.createElement("input");
  input.type = "email"
  input.placeholder = "email"
  input.setAttribute("id", "email")
  let buton = document.createElement("button");
  buton.innerText = "Sigh Up For All"
  div.append(input, buton)
  maindiv[0].append(div);
  buton.addEventListener("click", clickf)
}
function clickf() {
  console.log("prinv")
  let data = document.querySelector("#email").value;
  console.log(data);
  if (data.includes("@gmail.com")) {
    // alert("Wri");
    document.querySelector("#email").value = "";
    let cre = document.querySelector("#email")
    cre.setAttribute("type", "password");
    cre.setAttribute("placeholder", "password");

  }
  else {
    alert("Write Correct Email id");
  }
}
let obj = ["https://cdn.wallpapersafari.com/37/0/Gb6ZxX.jpg", "https://c4.wallpaperflare.com/wallpaper/156/167/750/movies-thor-chris-hemsworth-black-background-wallpaper-preview.jpg", "https://wallpapercave.com/wp/wp11125797.jpg", "https://www.filmiforest.com/img/movies/608/ante-sundaraniki-photo-1.jpg", "https://wallpaperaccess.com/full/1076854.jpg", "https://wallpaperaccess.com/full/6127608.jpg"];
let cou = 0;
let p = document.getElementById("move")
let img = document.createElement("img");
img.src = obj[cou];
console.log(obj[1])
p.append(img);
cou++
let id = setInterval(function () {
  if (cou == obj.length) {
    cou = 0;
  }
  img.src = obj[cou];
  console.log(obj[1])
  p.append(img);
  cou++
}, 3000)