
const localData = JSON.parse(localStorage.getItem('singleData'));
console.log(localData);

const appendtennisData = ({ urlToImage, author, title, description }) => {

    let tennis_Conatiner = document.getElementById("SingleData")
    tennis_Conatiner.innerHTML = null;

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
    tennis_Conatiner.append(div)
}

appendtennisData(localData);

