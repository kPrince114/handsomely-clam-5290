
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


let gettennisData = async () => {
    try {
        let res = await fetch(`https://newsapi.org/v2/everything?q=tennis&apiKey=9bf176f2eafd4862b769de39177ae88f`);
        let data = await res.json();
        // console.log(data.articles);

        let temparr = [];
        for (let i = 0; i < 6; i++) {
            temparr.push(data.articles[i]);
        }
        // console.log(temparr)
        appendtennisData(temparr);


    } catch (e) {
        console.log(e);
    }
}
gettennisData();



const appendtennisData = (data) => {
    console.log(data);
    let tennis_Conatiner = document.getElementById("tennis")
    tennis_Conatiner.innerHTML = null;
    data.forEach(({ urlToImage, author, title, description, url }) => {

        let div = document.createElement("div");
        div.onclick = () => {
            savelocal({ urlToImage, author, title, description, url });

        }
        let image = document.createElement("img");
        image.src = urlToImage;
        image.setAttribute("class", "img");
        let author_name = document.createElement("p");
        author_name.innerText = author;
        let title_m = document.createElement("p");
        title_m.innerText = title;
        let details = document.createElement("p");
        details.innerText = description;
        div.append(image, author_name, title_m, details);
        tennis_Conatiner.append(div)
    });
}


const savelocal = (data) => {
    console.log(data);
    localStorage.setItem("singleData", JSON.stringify(data));
     window.location.href = "explore.html";
};


let getcricketData = async () => {
    try {
        let res = await fetch(`https://newsapi.org/v2/everything?q=cricket&apiKey=9bf176f2eafd4862b769de39177ae88f`);
        let data = await res.json();
        // console.log(data.articles);

        let temparr = [];
        for (let i = 0; i < 6; i++) {
            temparr.push(data.articles[i]);
        }
         console.log(temparr)
        appendcricketData(temparr);


    } catch (e) {
        console.log(e);
    }
}
getcricketData();


const appendcricketData = (data) => {
    console.log(data);
    let cricket_Conatiner = document.getElementById("cricket")
    cricket_Conatiner.innerHTML = null;
    data.forEach(({ urlToImage, author, title, description, url }) => {

        let div = document.createElement("div");
        div.onclick = () => {
            savelocal({ urlToImage, author, title, description, url });

        }
        let image = document.createElement("img");
        image.src = urlToImage;
        image.setAttribute("class", "img");
        let author_name = document.createElement("p");
        author_name.innerText = author;
        let title_m = document.createElement("p");
        title_m.innerText = title;
        let details = document.createElement("p");
        details.innerText = description;
        div.append(image, author_name, title_m, details);
        cricket_Conatiner.append(div)
    });
}

let getFootballData = async () => {
    try {
        let res = await fetch(`https://newsapi.org/v2/everything?q=football&apiKey=9bf176f2eafd4862b769de39177ae88f`);
        let data = await res.json();
        // console.log(data.articles);

        let temparr = [];
        for (let i = 0; i < 6; i++) {
            temparr.push(data.articles[i]);
        }
        // console.log(temparr)
        appendFootballData(temparr);
    } catch (e) {
        console.log(e);
    }
}
getFootballData();

const appendFootballData = (data) => {
    console.log(data);
    let football_Conatiner = document.getElementById("football")
    football_Conatiner.innerHTML = null;
    data.forEach(({ urlToImage, author, title, description, url }) => {

        let div = document.createElement("div");
        div.onclick = () => {
            savelocal({ urlToImage, author, title, description, url });

        }
        let image = document.createElement("img");
        image.src = urlToImage;
        image.setAttribute("class", "img");
        let author_name = document.createElement("p");
        author_name.innerText = author;
        let title_m = document.createElement("p");
        title_m.innerText = title;
        let details = document.createElement("p");
        details.innerText = description;
        div.append(image, author_name, title_m, details);
        football_Conatiner.append(div);
    });
};


let getF_oneData = async () => {
    try {
        let res = await fetch(`https://newsapi.org/v2/everything?q=formula1&apiKey=9bf176f2eafd4862b769de39177ae88f`);
        let data = await res.json();
        // console.log(data.articles);

        let temparr = [];
        for (let i = 0; i < 6; i++) {
            temparr.push(data.articles[i]);
        }
        // console.log(temparr)
        appendF_oneData(temparr);
    } catch (e) {
        console.log(e);
    }
}
getF_oneData();

const appendF_oneData = (data) => {
    console.log(data);
    let f_one_Conatiner = document.getElementById("f_one")
    f_one_Conatiner.innerHTML = null;
    data.forEach(({ urlToImage, author, title, description, url }) => {

        let div = document.createElement("div");
        div.onclick = () => {
            savelocal({ urlToImage, author, title, description, url });

        }
        let image = document.createElement("img");
        image.src = urlToImage;
        image.setAttribute("class", "img");
        let author_name = document.createElement("p");
        author_name.innerText = author;
        let title_m = document.createElement("p");
        title_m.innerText = title;
        let details = document.createElement("p");
        details.innerText = description;
        div.append(image, author_name, title_m, details);
        f_one_Conatiner.append(div);
    });
};