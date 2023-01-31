// Write code for the Progress page here 

let progr=JSON.parse(localStorage.getItem("addto"))

let doneArr=JSON.parse(localStorage.getItem("done"))||[]

     displayTable(progr)
      function displayTable(res){
     document.querySelector("tbody").innerHTML=""
       res.forEach(function(el){
   
      let tr=document.createElement("tr")
  
      let td1=document.createElement("td")
      td1.innerText=el.taskName
  
      let td2=document.createElement("td")
      td2.innerText=el.des
  
      let td3=document.createElement("td")
      td3.innerText=el.stdate
  
      let td4=document.createElement("td")
      td4.innerText=el.endate
  
      let td5=document.createElement("td")
      td5.innerText=el.priority
  
      let td6=document.createElement("td")
      td6.innerText="Add to Done"
      td6.addEventListener("click",function(event){
        event.target.parentNode.remove()
        addtodone(el)
      })
  
      tr.append(td1,td2,td3,td4,td5,td6)
  
      document.querySelector("tbody").append(tr)
       
       
       })
       
  }

  function addtodone(el){
    doneArr.push(el)
    localStorage.setItem("done",JSON.stringify(doneArr))

  }