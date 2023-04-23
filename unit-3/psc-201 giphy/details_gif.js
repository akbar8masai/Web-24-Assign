let id=JSON.parse(localStorage.getItem("details"))

const APIKEY ="DQlmYkAaf8FFIBLcETTG3x5JP16Am7zU"

const details =async()=>{
 
try{

     let response = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${APIKEY}`)
     let data = await response.json();
     append(data.data)
    // console.log(data)
    }
catch(error){
    console.log(error)
}

}
details()

const append=(data)=>{
    let details=document.getElementById("details")
    let img=document.createElement("img")
    img.src=data.images.original.url

    let p =document.createElement("p")
    p.innerHTML=data.title

    details.append(img,p)
    

}