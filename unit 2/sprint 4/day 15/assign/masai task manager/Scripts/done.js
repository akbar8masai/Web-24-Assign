// Write code related to Done page here

let Donelist=JSON.parse(localStorage.getItem("done"))
//console.log(Donelist);

displayTable(Donelist)
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
  
      
      
  
      tr.append(td1,td2,td3,td4,td5)
  
      document.querySelector("tbody").append(tr)
       
       })
  }

