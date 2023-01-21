// fill in javascript code here
document.querySelector("form").addEventListener("submit",myfun)





function myfun(event){
  event.preventDefault()
  let Doc_name=document.querySelector("#name").value
  let Doc_Id=document.querySelector("#docID").value
  let spec=document.querySelector("#dept").value
  let exp=document.querySelector("#exp").value
  let mail=document.querySelector("#email").value
  let mob=document.querySelector("#mbl").value
  console.log(Doc_name,Doc_Id,spec,exp,mail,mob)

  let tRow=document.createElement("tr")

  let td1=document.createElement("td")
  td1.innerText=Doc_name

  let td2=document.createElement("td")
  td2.innerText=Doc_Id

  let td3=document.createElement("td")
  td3.innerText=spec
  
  let td4=document.createElement("td")
  td4.innerText=exp

  let td5=document.createElement("td")
  td5.innerText=mail

  let td6=document.createElement("td")
  td6.innerText=mob
  
 let td7=document.createElement("td")
 if(exp > 5){
    td7.innerText="Senior"
 }else if(exp >2 && exp < 5){
   td7.innerText="Junior"
 }
 else {
    td7.innerText="Trainee"
 }

let td8=document.createElement("td")
td8.innerText="Delete"
td8.addEventListener("click",deleteTodo)
td8.style.backgroundColor="red"

  tRow.append(td1,td2,td3,td4,td5,td6,td7,td8)
  document.querySelector("tbody").append(tRow)

  function deleteTodo(event){
    console.log(event.target.parentNode)
    event.target.parentNode.remove()
}


}