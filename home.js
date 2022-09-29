
// KEY=`b9b66b3f31b34e9fa734199462c5c98d`
// https://newsapi.org/v2/top-headlines?country=us&apiKey=b9b66b3f31b34e9fa734199462c5c98d

const trand = async () =>{

let newa=document.getElementById("trand")

try{
    let res=await fetch (`https://newsapi.org/v2/top-headlines?country=in&pagesize=16&apiKey=b9b66b3f31b34e9fa734199462c5c98d`);
    let data=await res.json();
    console.log(data)
    appendData(data.articles)
}
catch(err){
    console.log(err)


}

}
trand()

let two=document.getElementById("two")
let third=document.getElementById("third")
let fifth=document.getElementById("fifth");
let fourth=document.getElementById("fourth")

  let maindiv = document.getElementById("tranding")

const appendData = (data) => {
    // two.innerHTML = null;
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
                window.location.href = "drop.html";
            });
            if(c<=3){
                two.append(div1)
                div1.setAttribute("class","two2")
            }
            else if(c>=2 && c<5){
                third.append(div1);
                div1.setAttribute("class","third3")

            }else if(c>=5 && c<8){
             fourth.append(div1);
             div1.setAttribute("class","fourth4")
            }
            else if(c>=8 && c<12){
                fifth.append(div1);
                div1.setAttribute("class","fifth5")
            }
            c++
        }
      
    });
    console.log(c)
  }