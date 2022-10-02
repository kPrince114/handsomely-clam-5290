import header from "../components/header.js"
document.querySelector("#header1").innerHTML = header();

// let navbar_div = document.getElementById("navbar");
// navbar_div.innerHTML=navbar();

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




let data1 = JSON.parse(localStorage.getItem("news"));
    console.log(data1);
    let maindiv = document.getElementById("newsmain")
    let tag=document.getElementById("tag");
    let data=data1[0];
    let appendProducts = (data) => {
        maindiv.innerHTML = null;
        tag.innerHTML=null;
            let div1 = document.createElement("div");
            let img = document.createElement('img');
            img.src = data.urlToImage;
            let div2 = document.createElement("div");
            let content=document.createElement("p");
            content.innerText=data.content;
            let title = document.createElement('h4');
            title.innerText = data.title;
            let publishedAt = document.createElement('h5');
            let bag = ""
            for (let i = 0; i < 10; i++) {
                bag = bag + data.publishedAt[i]
            }
            publishedAt.innerText ="Posted date:- "+bag;
            let div3 = document.createElement("div")
            div2.append(publishedAt,img,content);
            tag.append(title);
            div1.append(div2);
            div1.setAttribute("class","news");
            // div1.addEventListener("click", function () {
            //     let array1 = []
            //     array1.push(ele)
            //     localStorage.setItem("news", JSON.stringify(array1))
            //     window.location.href = "drop.html";
            // });
            maindiv.append(div1);
    }
    appendProducts(data);
    function clickfun1(){
        window.location.href="https://www.wristmate.in/pages/smartwatch?utm_source=taboola&utm_campaign=20299339&utm_medium=deccanherald.com&utm_term=http%3A%2F%2Fcdn.taboola.com%2Flibtrc%2Fstatic%2Fthumbnails%2Fb743b4cef8d4d7d71e6e2ec05e19a513.png%20&utm_content=India%3A+Why+is+Everyone+Excited+Over+This+Rs.+2499+Smartwatch&tblci=GiB2DBk1KH2J_zK1UbfRf_rOep_IBygP0qmtXiOXTzhpuiCHrlEo5PiomfO2gsbFAQ#tblciGiB2DBk1KH2J_zK1UbfRf_rOep_IBygP0qmtXiOXTzhpuiCHrlEo5PiomfO2gsbFAQ"
    }