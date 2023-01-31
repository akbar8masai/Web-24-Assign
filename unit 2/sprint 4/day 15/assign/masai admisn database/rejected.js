// All the Code for the Rejected page goes here
let Rej=JSON.parse(localStorage.getItem("rej"))

displayTable(Rej)
function displayTable(res){
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
        
        tr.append(td1,td2,td3,td4,td5)

        document.querySelector("tbody").append(tr)
    })

}