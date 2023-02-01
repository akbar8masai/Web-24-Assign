// Write All Home  Page Script Here

document.querySelector("form").addEventListener("submit",myform)

let Mov=JSON.parse(localStorage.getItem("addtobookmark"))||[]

function myform(event){
    event.preventDefault()

    let obj={
        movie_name:document.querySelector("#name").value,
        movie_actor:document.querySelector("#mainactor").value,
        movie_des:document.querySelector("#desc").value,
        movie_date:document.querySelector("#release").value,
       movie_category: document.querySelector("#category").value,
       movie_price:document.querySelector("#price").value,

    }

    Mov.push(obj)

    localStorage.setItem("addtobookmark",JSON.stringify(Mov))

}