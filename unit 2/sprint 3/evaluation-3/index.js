document.querySelector("form").addEventListener("submit",mycal)
let noOfStock=0;
let totalPortfolio=0;
let noOfStockDOM=document.getElementById("noOfStock")
let totalPortfolioDOM=document.getElementById("totalPortfolio")




function mycal(event){
event.preventDefault()
let cname=document.querySelector("#compName").value
let lisexc=document.querySelector("#listedExchange").value
let ind=document.querySelector("#industry").value
let stckprice=document.querySelector("#stockPrice").value
let quantity=document.querySelector("#quantity").value
let type=document.querySelector("#type").value

console.log(cname,lisexc,ind,stckprice,quantity,type)
let tRow=document.createElement("tr")

let td1=document.createElement("td")
td1.innerText=cname

let td2=document.createElement("td")
td2.innerText=lisexc

let td3=document.createElement("td")
td3.innerText=ind

let td4=document.createElement("td")
td4.innerText=stckprice

let td5=document.createElement("td")
td5.innerText=quantity

let td6=document.createElement("td")
td6.innerText=type

let td7=document.createElement("td")
td7.innerText=eval(stckprice*quantity)

let td8=document.createElement("td")
let today=new Date()
let date=today.getDate()+"/"+(today.getMonth()+1)+"/"+today.getFullYear()
td8.innerText=date

let td9=document.createElement("td")
td9.innerText="Sell"
td9.style.backgroundColor="red"
td9.addEventListener("click",deleteTodo)

tRow.append(td1,td2,td3,td4,td5,td6,td7,td8,td9)
document.querySelector("tbody").append(tRow)

function deleteTodo(event){
    event.target.parentNode.remove()
  }
  
 noOfStock+=1
 noOfStockDOM.textContent=noOfStock
 totalPortfolio+=eval(stckprice*quantity)
 totalPortfolioDOM.textContent=totalPortfolio

}