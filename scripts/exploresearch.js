import header from "../components/header.js"
document.querySelector("#header1").innerHTML = header();

import navbar from "../components/navbar.js";
let navbar_ = document.getElementById("navbar");
navbar_.innerHTML = navbar();


import footer1 from "../components/footer1.js";
let footer_ = document.getElementById("footer1");
footer_.innerHTML = footer1();



import footer2 from "../components/footer2.js"
document.querySelector("#footer2").innerHTML=footer2();



import footer3 from "../components/footer3.js"
document.querySelector("#footer3").innerHTML = footer3();


document.getElementById("search").addEventListener("change",(event)=>{
  console.log("xyz")
  funct();
})
  
async function funct(){
    try {
        let quary=document.getElementById("search").value;
      let res = await fetch(`https://newsapi.org/v2/everything?q=${quary}&from=2022-09-02&sortBy=publishedAt&apiKey=f3401637e03e45a99071f25c804a751b`);
      let data = await res.json();
      console.log(data.articles);
       appendProducts(data.articles);
    } catch (err) {
      console.log("err:", err);
    }
}
  let maindiv = document.getElementById("result_s")

  let appendProducts = (data) => {
    maindiv.innerHTML = null;
    data.forEach((ele) => {
        let div1 = document.createElement("div");
        let img = document.createElement('img');
        img.src = ele.urlToImage;
        let div2 = document.createElement("div");
        div2.append(img);
        let title = document.createElement('p');
        title.innerText = ele.title;
        let publishedAt = document.createElement('p');
        let bag=""
        for (let i = 0; i < 10; i++) {
            bag=bag+ele.publishedAt[i]
        }
        publishedAt.innerText =bag;
        let div3 = document.createElement("div")
        div3.append(title,publishedAt)
        div1.append(div2,div3)
        div1.addEventListener("click", function () {
            let array1 = []
            array1.push(ele)
            localStorage.setItem("news", JSON.stringify(array1))
            window.location.href = "drop.html";
        });
        maindiv.append(div1);
    });
}