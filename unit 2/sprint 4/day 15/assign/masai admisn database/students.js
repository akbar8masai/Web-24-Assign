// All the Code for All Students Page Goes Here
let Addbase=JSON.parse(localStorage.getItem("addtobase"))

let rejectArr=JSON.parse(localStorage.getItem("rej"))||[]

function handlecourse(){

    let selected=document.querySelector("#filter").value
    console.log(selected)
    if(selected=="All"){
    displayTable(Addbase)
     }
    if(selected=="Web-Development"){
    let filterdata=  Addbase.filter(function(el){
       return  el.person_course ==filter.value
    })
      displayTable(filterdata)
     }
     if(selected=="Android-Development"){
      let filterdata= Addbase.filter(function(el){
         return  el.person_course ==filter.value
      })
        displayTable(filterdata)
       }
       if(selected=="Data-Analitics"){
       let filterdata= Addbase.filter(function(el){
         return  el.person_course ==filter.value
      })
        displayTable(filterdata)
       }



}

 let bookmark=JSON.parse(localStorage.getItem("acc"))||[]
 displayTable(Addbase)
function displayTable(res){
    document.querySelector("tbody").innerHTML=""
    res.forEach(function(el){
        let tr=document.createElement("tr")
     
        let td1=document.createElement("td")
        td1.innerText=el.person_name
     
        let td2=document.createElement("td")
        td2.innerText=el.person_mail
     
        let td3=document.createElement("td")
        td3.innerText=el.person_course
     
        let td4=document.createElement("td")
        td4.innerText=el.person_gen
     
        let td5=document.createElement("td")
        td5.innerText=el.person_mob
     
        let td6=document.createElement("td")
        td6.innerText="Accepted"
        td6.style.backgroundColor="green"
        td6.addEventListener("click",function(event){
            event.target.parentNode.remove()
            accept(el)
        })
     
        let td7=document.createElement("td")
        td7.innerText="Rejected"
        td7.style.backgroundColor="red"
        td7.addEventListener("click",function(event){
            event.target.parentNode.remove()
            reject(el)
           })
        //td7.addEventListener("click",reject)
     
        tr.append(td1,td2,td3,td4,td5,td6,td7)
     
        document.querySelector("tbody").append(tr)
        

     
     })
 }

 function accept(el){
    bookmark.push(el)
    localStorage.setItem("acc",JSON.stringify(bookmark))
 }

 function reject(el){
   rejectArr.push(el)
   localStorage.setItem("rej",JSON.stringify(rejectArr))
 }

