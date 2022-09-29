
const url = `https://newsapi.org/v2/everything?q=tesla&from=2022-08-28&sortBy=publishedAt&apiKey=9bf176f2eafd4862b769de39177ae88f`


let getData = async () => {
    try {
        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=9bf176f2eafd4862b769de39177ae88f`)
        let data = await res.json();
        console.log(data.articles);
        appendData(data.articles);
    } catch (e) {
        console.log(e);
    }
}
getData();


const appendData = (data) => {
    let conatiner = document.getElementById("container")
    conatiner.innerHTML = null;
    data.forEach(({ urlToImage, author, title, description }) => {

        let div = document.createElement("div");
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
        conatiner.append(div)
    });

}


