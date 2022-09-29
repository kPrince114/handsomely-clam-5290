let p=`https://newsapi.org/v2/top-headlines?country=in&apiKey=df8136d55b764ca284d35d19802bc7f7`
let y=`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=in`
async function newsD() {
    try {
      
      let res = await fetch(p);
      let data = await res.json();
      console.log(data.articles);
       appendProducts(data.articles);
    } catch (err) {
      console.log("err:", err);
    }
}
newsD();
let two=document.getElementById("two")
let third=document.getElementById("third")
let six=document.getElementById("six")
  let maindiv = document.getElementById("news_container")
  let appendProducts = (data) => {
    two.innerHTML = null;
    let c=0;
    data.forEach((ele) => {
        if(c<8){
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
            if(c<2){
                two.append(div1)
                div1.setAttribute("class","two2")
            }
            else if(c>=2&&c<5) {
                third.append(div1);
                div1.setAttribute("class","third3")
            }
            else{
                sixi.append(div1);
                div1.setAttribute("class","six")
            }
           
            c++
        }
      
    });
    console.log(c)
  }