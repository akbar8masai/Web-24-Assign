// Write code related to Home page here 


   document.querySelector("form").addEventListener("submit",myform)
let s=JSON.parse(localStorage.getItem("list"))||[]

function myform(event){
    event.preventDefault()
  
    let obj={
        taskName:document.querySelector("#name").value,
        des:document.querySelector("#desc").value,
        stdate:document.querySelector("#start").value,
        endate:document.querySelector("#end").value,
        priority:document.querySelector("#priority").value,
    }
  s.push(obj)
  
   console.log(s);
   localStorage.setItem("list",JSON.stringify(s))

}
