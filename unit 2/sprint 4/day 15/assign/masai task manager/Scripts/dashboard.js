// Write code related to dashboard page here

let dashArr=JSON.parse(localStorage.getItem("list"))
  // console.log(dashArr);
  function handlepriority(){
    let selected=document.querySelector("#filter").value
    //console.log(selected);

    if(selected=="Low"){
     let lowlist= dashArr.filter(function(el){
        return  el.priority==filter.value
      })
      displayTable(lowlist)
      document.querySelector("h1>span").innerText=lowlist.length

    }
    if(selected=="Medium"){
      let Medlist= dashArr.filter(function(el){
         return  el.priority==filter.value
       })
       displayTable(Medlist)
       document.querySelector("h1>span").innerText=Medlist.length
 
     }
     if(selected=="High"){
      let highlist= dashArr.filter(function(el){
         return  el.priority==filter.value
       })
       displayTable(highlist)
       document.querySelector("h1>span").innerText=highlist.length
 
     }
  }
  document.querySelector("h1>span").innerText=dashArr.length

  let Addto=JSON.parse(localStorage.getItem("addto"))||[]
     displayTable(dashArr)
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
      td6.innerText="Add to Progress"
      td6.addEventListener("click",function(event){
        event.target.parentNode.remove()
        addtoprogress(el)
      })
  
      tr.append(td1,td2,td3,td4,td5,td6)
  
      document.querySelector("tbody").append(tr)
       
       
       })
       
  }

  function addtoprogress(el){
    Addto.push(el)
    localStorage.setItem("addto",JSON.stringify(Addto))
     
  }
 