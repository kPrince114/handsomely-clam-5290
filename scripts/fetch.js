// console.log("prince")
import navbar from "../components/navbar.js";
    console.log(navbar)

    let navbar_div = document.getElementById("navbar");
//console.log(navbar_div)
    navbar_div.innerHTML= navbar()
    console.log("prince")



async function newsall() {
    try {
      
      let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=in`);
      let data = await res.json();
      console.log(data.articles);
       appendProducts(data.articles);
    } catch (err) {
      console.log("err:", err);
    }
}
newsall();
let two=document.getElementById("two")
let third=document.getElementById("third")
let fourth=document.getElementById("fourth")
  let maindiv = document.getElementById("news_container")
  let appendProducts = (data) => {
    two.innerHTML = null;
    let c=0;
    data.forEach((ele) => {
        if(c<5){
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
                window.location.href = "explore.html";
            });
            if(c<2){
                two.append(div1)
                div1.setAttribute("class","two2")
            }
            else{
                third.append(div1);
                div1.setAttribute("class","third3")
            }
            c++
        }
      
    });
    console.log(c)
  }
  async function newsall2() {
    try {
      let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=us`);
      let data = await res.json();
      console.log(data.articles);
       appendProducts2(data.articles);
    } catch (err) {
      console.log("err:", err);
    }
}
newsall2();
let cont21=document.getElementById("cont21")
let cont22=document.getElementById("cont22")
let cont23=document.getElementById("cont23")
let cont24=document.getElementById("cont24")
let cont25=document.getElementById("cont25")
let cont26=document.getElementById("cont26")
  let maindiv2 = document.getElementsByName("cont2")
  let appendProducts2 = (data) => {
    maindiv2.innerHTML = null;
    let c=0;
    data.forEach((ele) => {
        if(c<9){
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
                window.location.href = "explore.html";
            });
            if(c<1){
                // cont21.append(div1)
                // div1.setAttribute("class","two2")
            }
            else if(c>=1&&c<4){
                cont22.append(div1);
                div1.setAttribute("class","third3")
            }
            else if(c>=4&&c<6){
                cont24.append(div1);
                div1.setAttribute("class","two2")
            }
            else if(c>=6&&c<9){
                cont26.append(div1);
                div1.setAttribute("class","third3")
            }
            c++
        }
    });
    console.log(c)
  }
  async function newsall3() {
    try {
      let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=ch`);
      let data = await res.json();
      console.log(data.articles);
       appendProducts3(data.articles);
    } catch (err) {
      console.log("err:", err);
    }
}
newsall3();
let cont41=document.getElementById("cont41")
let cont42=document.getElementById("cont42")
let cont43=document.getElementById("cont43")
let cont44=document.getElementById("cont44")
  let maindiv4 = document.getElementsByName("cont4")
  let appendProducts3 = (data) => {
    maindiv4.innerHTML = null;
    let c=0;
    data.forEach((ele) => {
        if(c<5){
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
                window.location.href = "explore.html";
            });
            if(c<1){
                cont41.append(div1)
                div1.setAttribute("class","oned")
            }
            else if(c>=1&&c<2){
                cont42.append(div1);
                div1.setAttribute("class","ones")
            }
            else if(c>=2&&c<5){
                cont43.append(div1);
                div1.setAttribute("class","thirdsd")
            }
            c++
        }
    });
    console.log(c)
  }
  async function newsall4() {
    try {
      let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=nz`);
      let data = await res.json();
      console.log(data.articles);
       appendProducts4(data.articles);
    } catch (err) {
      console.log("err:", err);
    }
}
newsall4();
let con61=document.getElementById("con61")
let con62=document.getElementById("con62")
  let maindiv5 = document.getElementsByName("con6")
  let appendProducts4 = (data) => {
    maindiv4.innerHTML = null;
    let c=0;
    data.forEach((ele) => {
        if(c<2){
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
                window.location.href = "explore.html";
            });
            if(c<1){
                con61.append(div1)
                div1.setAttribute("class","oned")
            }
            else if(c>=1&&c<2){
                con62.append(div1);
                div1.setAttribute("class","ones")
            }
            c++
        }
    });
    console.log(c)
  }
  

  //export{newsall,appendProducts}
  //6OBDL4FrfHo9LQmf8MkhX1B6GRMxzE0Q
  //Q41iLR93VwhTUzAf0yZQRxhY6l0PRO5X
  //https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f3401637e03e45a99071f25c804a751b