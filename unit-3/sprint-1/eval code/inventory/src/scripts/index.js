function redirect() {
   location.replace("inventory.html")
}

function product(name,brand,price,image){
  this.name=name;
  this.brand=brand;
  this.price=price;
  this.image=image;
}

function getFormData(e){
  e.preventDefault()

  let n=document.getElementById("product_name").value
  let b=document.getElementById("product_brand").value
  let p=document.getElementById("product_price").value
  let i=document.getElementById("product_image").value

  addData(n,b,p,i)
  
}

function addData(n,b,p,i) {
   let product1= new product(n,b,p,i)

   let d= JSON.parse(localStorage.getItem("data"))||[]
   d.push(product1)

   localStorage.setItem("data",JSON.stringify(d))

   document.getElementById("product_name").value =null
   document.getElementById("product_brand").value =null
   document.getElementById("product_price").value =null
   document.getElementById("product_image").value =null
}

if (typeof exports !== "undefined") {
  module.exports = {
    addData,
    redirect,
  };
}