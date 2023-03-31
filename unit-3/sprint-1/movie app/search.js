async function searchMovies(){
    let loader_div =document.getElementById("loader_div")
    loader_div.style.display="block"




   let movie_name =document.getElementById("movie_name").value
//console.log(movies_name);

   try{

   let response = await fetch(`http://www.omdbapi.com/?apikey=e17054db&s=${movie_name}&page=2`)

   let data = await response.json()
   //console.log(data);

   let actual_data =data.search
   
   appendMovies(actual_data)

   }
   catch(err){
      console.log(err);
      }

  
   
}

function appendMovies(data){
   
    let loader_div =document.getElementById("loader_div")
    loader_div.style.display="none"
    

    let movies_div= document.getElementById("movies")
    movies_div.innerHTML=null;


    data.forEach(function(el){
        let div= document.createElement("div")

        let p_name =document.createElement("p")
        p_name.innerText = el.Title

        let img =document.createElement("img")
        
        img.src=el.Poster
       

        div.append(img,p_name)

        movies_div.append(div)
    })
}




