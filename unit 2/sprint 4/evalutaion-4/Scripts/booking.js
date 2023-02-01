// Write All `All Movies`  Page Script Here
let BookArr=JSON.parse(localStorage.getItem("addtobookmark"))

let mymovieArr=JSON.parse(localStorage.getItem("mymovies"))||[]

function handlecate(){
    let selected=document.querySelector("#filter").value
    //console.log(selected);
    if(selected=="Fiction"){
     let book= BookArr.filter(function(el){
      return  el.movie_category==filter.value
      })
       displayTable(book)
       document.querySelector("h1>span").innerText=book.length

    }
    if(selected=="Action"){
        let book= BookArr.filter(function(el){
            return  el.movie_category==filter.value
            })
             displayTable(book)
             document.querySelector("h1>span").innerText=book.length
    }
    if(selected=="Comedy"){
        let book= BookArr.filter(function(el){
            return  el.movie_category==filter.value
            })
             displayTable(book)
             document.querySelector("h1>span").innerText=book.length
    }
}

displayTable(BookArr)

document.querySelector("h1>span").innerText=BookArr.length

function displayTable(res){

 document.querySelector("tbody").innerHTML=""
 res.forEach(function(el){
    
        let tr=document.createElement("tr")

let td1=document.createElement("td")
td1.innerText=el.movie_name

let td2=document.createElement("td")
td2.innerText=el.movie_actor


let td3=document.createElement("td")
td3.innerText=el.movie_des

let td4=document.createElement("td")
td4.innerText=el.movie_date


let td5=document.createElement("td")
td5.innerText=el.movie_category


let td6=document.createElement("td")
td6.innerText=el.movie_price

let td7=document.createElement("td")
td7.innerText="buy"
td7.addEventListener("click",function(event){
    event.target.parentNode.remove()
    addtomovies(el)
})

tr.append(td1,td2,td3,td4,td5,td6,td7)

document.querySelector("tbody").append(tr)
    })
}
function addtomovies(el){
    mymovieArr.push(el)
    localStorage.setItem("mymovies",JSON.stringify(mymovieArr))

}