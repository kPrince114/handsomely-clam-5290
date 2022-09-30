
// KEY=`b9b66b3f31b34e9fa734199462c5c98d`
// https://newsapi.org/v2/top-headlines?country=us&apiKey=b9b66b3f31b34e9fa734199462c5c98d

const trand = async () =>{

let newa=document.getElementById("trand")

try{
    let res=await fetch (`https://newsapi.org/v2/top-headlines?country=in&apiKey=927d8ed811d04a528848961ef27aebc5`);
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
let sixth = document.getElementById("sixth");
let seventh  = document.getElementById("seventh");

  let maindiv = document.getElementById("tranding")

const appendData = (data) => {
    // two.innerHTML = null;
    let c=0;
    data.forEach((ele) => {
        if(c<20){
            let div1 = document.createElement("div");
           
            let img = document.createElement('img');
            img.src = ele.urlToImage;
            let div2 = document.createElement("div");
            div2.append(img);
            let title = document.createElement('p');
            title.innerText = ele.title;
           
            // let publishedAt = document.createElement('p');
            // let bag=""
            // for (let i = 0; i < 10; i++) {
            //         bag=bag+ele.publishedAt[i]
            // }
            // publishedAt.innerText =bag;
            let div3 = document.createElement("div")
            
            div3.append(title)
            div1.append(div2,div3)
            
            div1.addEventListener("click", function () {
                let array1 = []
                array1.push(ele)
                localStorage.setItem("news", JSON.stringify(array1))
                window.location.href = "drop.html";
            });
            if(c<=2){
                two.append(div1)
                div1.setAttribute("class","two2")
            }
            else if(c>2 && c<=4){
                third.append(div1);
                div1.setAttribute("class","third3")

            }else if(c>=5 && c<10){
             fourth.append(div3);
             div3.setAttribute("class","fourth4")
            }
            else if(c>=10 && c<=12){
                fifth.append(div1);
                div1.setAttribute("class","fifth5")
            }
            else if(c>=13 && c<=14){
                sixth.append(div1);
                div1.setAttribute("class","sixth6")
            }
            else if(c>=15 && c<=17){
                seventh.append(div1);
                div1.setAttribute("class","seventh7")
            }           
            c++
        }
      
    });
    console.log(c)
  }


// ***********************************************************************************

  const national = async () =>{

    let newa=document.getElementById("trand")

    try{                                                                                               
        let res=await fetch (`https://newsapi.org/v2/top-headlines?country=in&apiKey=927d8ed811d04a528848961ef27aebc5`);
        let data=await res.json();
        console.log(data)
        append_Data(data.articles)
    }
    catch(err){
        console.log(err)   
    
    }
    
    }
    national()
    
   
    let eleventh = document.getElementById("eleventh");
    let ninth = document.getElementById("ninth")
    let twelveth = document.getElementById("twelveth");
    let thirteenth = document.getElementById("thirteenth")
    
      let mainndiv = document.getElementById("tranding")
    
    const append_Data = (data) => {
        // two.innerHTML = null;
        let c=0;
        data.forEach((ele) => {
            if(c<20){
                let div1 = document.createElement("div");
               
                let img = document.createElement('img');
                img.src = ele.urlToImage;
                let div2 = document.createElement("div");
                div2.append(img);
                let title = document.createElement('p');
                title.innerText = ele.title;
               
                
                let div3 = document.createElement("div")
                
                div3.append(title)
                div1.append(div2,div3)
                
                div1.addEventListener("click", function () {
                    let array1 = []
                    array1.push(ele)
                    localStorage.setItem("news", JSON.stringify(array1))
                    window.location.href = "drop.html";
                });
                if(c<=1){
                    eleventh.append(div1)
                    div1.setAttribute("class","eleventh11")
                }
                else if(c>1 && c<=4){
                    ninth.append(div1);
                    div1.setAttribute("class","ninth9")
    
                }
                else if(c>=5 && c<=6){
                    twelveth.append(div1);
                    div1.setAttribute("class","twelveth12")
                }else if(c>6 && c<=9){
                    thirteenth.append(div1);
                    div1.setAttribute("class","thirteenth13")
                }
                c++
            }
          
        });
        console.log(c)
      }

    //   ***********************************************

    const business = async () =>{

        let newa=document.getElementById("trand")
    
        try{                                                                                               
            let res=await fetch (`https://newsapi.org/v2/top-headlines?country=in&apiKey=927d8ed811d04a528848961ef27aebc5`);
            let data=await res.json();
            console.log(data)
            append_data(data.articles)
        }
        catch(err){
            console.log(err)   
        
        }
        
        }
        business()
        
       
        let fifteen = document.getElementById("fifteen");
        let sixteen = document.getElementById("sixteen")
        let seventeen= document.getElementById("seventeen");
       
        
          let main_div = document.getElementById("tranding")
        
        const append_data = (data) => {
            // two.innerHTML = null;
            let c=0;
            data.forEach((ele) => {
                if(c<20){
                    let div1 = document.createElement("div");
                   
                    let img = document.createElement('img');
                    img.src = ele.urlToImage;
                    let div2 = document.createElement("div");
                    div2.append(img);
                    let title = document.createElement('p');
                    title.innerText = ele.title;
                   
                    
                    let div3 = document.createElement("div")
                    
                    div3.append(title)
                    div1.append(div2,div3)
                    
                    div1.addEventListener("click", function () {
                        let array1 = []
                        array1.push(ele)
                        localStorage.setItem("news", JSON.stringify(array1))
                        window.location.href = "drop.html";
                    });
                    if(c<1){
                        fifteen.append(div1)
                        div1.setAttribute("class","fifteen15")
                    }
                    else if(c>=1 && c<=2){
                        sixteen.append(div1);
                        div1.setAttribute("class","sixteen16")
        
                    }
                    else if(c>=3 && c<=5){
                       seventeen.append(div1);
                        div1.setAttribute("class","seventeen17")
                    }
                  
                    c++
                }
              
            });
            console.log(c)
          }

        //   *******************************************


        const sports = async () =>{

            let newa=document.getElementById("trand")
        
            try{                                                                                               
                let res=await fetch (`https://newsapi.org/v2/top-headlines?category=sports&apiKey=927d8ed811d04a528848961ef27aebc5`);
                let data=await res.json();
                console.log(data)
                append_da(data.articles)
            }
            catch(err){
                console.log(err)   
            
            }
            
            }
            sports()
            
           
            let eighteen = document.getElementById("eighteen");
            let ninteen = document.getElementById("ninteen")
            let twenty= document.getElementById("twenty");
            let tone = document.getElementById("tone")
           
            
              let main_Div = document.getElementById("tranding")
            
            const append_da = (data) => {
                // two.innerHTML = null;
                let c=0;
                data.forEach((ele) => {
                    if(c<20){
                        let div1 = document.createElement("div");
                       
                        let img = document.createElement('img');
                        img.src = ele.urlToImage;
                        let div2 = document.createElement("div");
                        div2.append(img);
                        let title = document.createElement('p');
                        title.innerText = ele.title;
                       
                        
                        let div3 = document.createElement("div")
                        
                        div3.append(title)
                        div1.append(div2,div3)
                        
                        div1.addEventListener("click", function () {
                            let array1 = []
                            array1.push(ele)
                            localStorage.setItem("news", JSON.stringify(array1))
                            window.location.href = "drop.html";
                        });
                        if(c<=1){
                            eighteen.append(div1)
                            div1.setAttribute("class","eighteen18")
                        }
                        else if(c>=2 && c<=4){
                            ninteen.append(div1);
                            div1.setAttribute("class","ninteen19")
            
                        }
                        else if(c>=5 && c<=10){
                           twenty.append(div3);
                            div3.setAttribute("class","twenty20")
                        } 
                        else if(c>=11 && c<=13){
                            tone.append(div1);
                            div1.setAttribute("class","tone1")
                        }                     
                        c++
                    }                  
                });
                console.log(c)
              }


            //   **********************************************



            const enter = async () =>{

                let newa=document.getElementById("trand")
            
                try{                                                                                               
                    let res=await fetch (`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=927d8ed811d04a528848961ef27aebc5`);
                    let data=await res.json();
                    console.log(data)
                    append_dada(data.articles)
                }
                catch(err){
                    console.log(err)   
                
                }
                
                }
                enter()
                
               
                let ttwo = document.getElementById("ttwo");
                let tthree = document.getElementById("tthree")
                let tfour= document.getElementById("tfour");
                  
                                               
                const append_dada = (data) => {
                    // two.innerHTML = null;
                    let c=0;
                    data.forEach((ele) => {
                        if(c<20){
                            let div1 = document.createElement("div");
                           
                            let img = document.createElement('img');
                            img.src = ele.urlToImage;
                            let div2 = document.createElement("div");
                            div2.append(img);
                            let title = document.createElement('p');
                            title.innerText = ele.title;
                           
                            
                            let div3 = document.createElement("div")
                            
                            div3.append(title)
                            div1.append(div2,div3)
                            
                            div1.addEventListener("click", function () {
                                let array1 = []
                                array1.push(ele)
                                localStorage.setItem("news", JSON.stringify(array1))
                                window.location.href = "drop.html";
                            });
                            if(c<1){
                               ttwo.append(div1)
                                div1.setAttribute("class","ttwo2")
                            }
                            else if(c>=1 && c<=2){
                               tthree.append(div1);
                                div1.setAttribute("class","tthree3")
                
                            }
                            else if(c>=3 && c<=8){
                               tfour.append(div3);
                                div3.setAttribute("class","tfour4")
                            }                                              
                            c++
                        }                  
                    });
                    console.log(c)
                  }
    
    