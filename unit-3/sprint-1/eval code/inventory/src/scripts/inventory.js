append()
function redirect() {
  location.replace("index.html")

}

function append() {
  let data = JSON.parse(localStorage.getItem("data"))
  let container =document.getElementById("products_data")
  if(container){
    container.innerHTML= null;
  }
  
  data && data.map((el,index) =>{
    let div= document.createElement("div")
    div.setAttribute("class","item")
    let img=document.createElement("img")
    img.src=el.image
    let p=document.createElement("p")
    p.innerText=el.name
    let p2=document.createElement("p")
    p2.innerText=el.brand
    let p3 =document.createElement("p")
    p3.innerText=el.price

    let btn=document.createElement("button")
    btn.innerText="Remove products"
    btn.setAttribute("id","remove_products")
    btn.onclick=()=>{
      remove(index)
    }
    div.append(img,p,p2,p3,btn)

    container.appendChild(div)

  })
}

function remove(id) {
  let data = JSON.parse(localStorage.getItem("data"))

  data.splice(id,1)

  localStorage.setItem("data",JSON.stringify(data))
  append()
}


if (typeof exports !== "undefined") {
  module.exports = {
    append, remove
  };
}