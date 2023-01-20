document.querySelector("form").addEventListener("submit",todo)


function todo(event){
    event.preventDefault()
    let task_name=document.querySelector("#task").value
    let priority=document.querySelector("#priority").value
    console.log(task_name,priority)
       
    let tRow = document.createElement("tr")

    // 1st column
    let td1 = document.createElement("td")
    td1.innerText=task_name

    // 2nd column
    let td2 = document.createElement("td")
    td2.innerText=priority
    if(priority=="High"){
     td2.style.backgroundColor="red"
    }else{
        td2.style.backgroundColor="green"
    }

    // 3rd column
    let td3 = document.createElement("td")
    td3.innerText="Delete"
    td3.style.backgroundColor="red"
    td3.addEventListener("click",deleteTodo)
   
    // append columns to tr
    tRow.append(td1,td2,td3)
    document.querySelector("tbody").append(tRow)


    function deleteTodo(event){
        console.log(event.target.parentNode)
        event.target.parentNode.remove()
    }
}   