let imgData=JSON.parse(localStorage.getItem("data"))
console.log(imgData)
let container = document.querySelector("#slideshow")
container.innerHTML=null;

let i=0;
let imgUrl=document.createElement("img");
    imgUrl.src=imgData[i].img;
    container.append(imgUrl);

setInterval(function(){
    container.innerHTML=null;
    if(i==imgData.length) i=0;

    
    let image=imgData[i].img;
    // console.log(image)
    let imgUrl=document.createElement("img");
    imgUrl.src=image;
    container.append(imgUrl);
    i++;
},5000);

display(imgData);

function display(imgData){
    document.querySelector("#movies").innerHTML=null;
    imgData.map(function(el,ind){
     let movieDiv=   document.createElement("div")
     movieDiv.setAttribute("class","movieDiv")

     let genre=document.createElement("h4")
     genre.setAttribute("class", "genre")
     genre.innerText=el.genre

     let image=document.createElement("img")
     image.setAttribute("class", "image")
     image.src=el.img

     let name=document.createElement("h2")
     name.setAttribute("class", "name")
     name.innerText=el.name

     let rating=document.createElement("h4")
     rating.setAttribute("class", "rating")
     rating.innerText=el.rating+ "⭐"

     movieDiv.append(image,name, genre,rating)

     document.querySelector("#movies").append(movieDiv)

    })
}

// sort functions here   

sort()


document.querySelector("#sort").addEventListener("change", sort);


function sort() {
    // event.preventDefault
    let order=document.querySelector("#sort").value

    if(order=="") {
        display(imgData)
    }

    else if(order==0){
        for(let i=0;i<imgData.length-1;i++){
            for(let j=0;j<imgData.length-i-1;j++){
                if(imgData[j].rating>imgData[j+1].rating){
                    swap(j,j+1,imgData)
                }
            }
        }
        display(imgData)
    // console.log(imgData)

        // location.reload()

    }

    
    else{
        for(let i=0;i<imgData.length-1;i++){
            for(let j=0;j<imgData.length-i-1;j++){
                if(imgData[j].rating<imgData[j+1].rating){
                    swap(j,j+1,imgData)
                }
            }
        }
        display(imgData)
    console.log(imgData)


    }
    
    
    // console.log(order)
}


function swap(i,j,arr){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
    return arr
}