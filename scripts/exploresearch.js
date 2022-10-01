async function enter(event){
    try {
        let quary=document.getElementById("search").value;
      let res = await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=${quary}`);
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