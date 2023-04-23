let APIKEY = `DQlmYkAaf8FFIBLcETTG3x5JP16Am7zU`

//arrow function


const main = async ()=>{

    try{

         let response =await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=25&rating=g`)
         
         let data =await response.json()
         //console.log(data.data);
         append(data.data)
    }

    catch(error){
        console.log(error)
    }
}
main()

const append =async(data)=>{

 data.forEach((e)=>{
     let gif =document.getElementById('gif')

     let img =document.createElement('img')
     img.src= e.images.downsized.url;
     img.addEventListener("click",()=>{
        details_gif(e.id)
     })
   
     gif.append(img)

 })

}

const details_gif=(id)=>{
  localStorage.setItem("details",JSON.stringify(id))

  window.location.href='/unit-3/psc-201 giphy/details_gif.html'

}

//random 
//api-format for url;

const random = async ()=>{
    let gif= document.getElementById("gif")
    gif.innerHTML=null;
   
    try{
        let response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&tag=&rating=g`)
         
        let data =await response.json()
        console.log(data)

        let img=document.createElement('img');
        img.src= data.data.images.downsized.url;
        img.addEventListener("click",()=>{
            details_gif(data.data.id)
         })

        gif.append(img)
    }

    catch(error){
        console.log(error)
    }
}

//categories
//api.document

const categories = async()=>{
    let gif= document.getElementById("gif")
    gif.innerHTML=null;
   //api.giphy.com/v1/gifs/categories
      let sorting=document.getElementById("sorting")
       sorting.innerHTML=null;

    try{
        let res = await fetch(`https://api.giphy.com/v1/gifs/categories?api_key=${APIKEY}`)
         
        let result =await res.json()
        //console.log(result)

        localStorage.setItem("categories",JSON.stringify(result.data))

        let sortZ_A= document.createElement("button")
        sortZ_A.innerText="z to A"
        sorting.append(sortZ_A)

        let sortA_Z= document.createElement("button")
        sortA_Z.innerText=" A to Z"
        sorting.append(sortA_Z)

       let dum;
       sortA_Z.onclick=()=>{
        sorting_cat(dum=false);
       }
       sortZ_A.onclick=()=>{
        sorting_cat(dum=true);
       }


        result.data.forEach((e)=>{
            let name=document.createElement("p")
        name.innerHTML=e.name;

        let img=document.createElement('img');
        img.src=e.gif.images.downsized.url;
        img.addEventListener("click",()=>{
            details_gif(e.gif.id)
         })
         gif.append(name,img)

        })

        

       
    }

    catch(error){
        console.log(error)
    }

}

const sorting_cat=(dum)=>{

    let data = JSON.parse(localStorage.getItem("categories"))


    // if dum is true it will run
    if(dum == true){
   
        data=data.reverse();
    }
    //below code will run 
    let gif= document.getElementById("gif")
    gif.innerHTML=null;

    data.forEach((e)=>{
        let name=document.createElement("p")
        name.innerHTML=e.name;

        let img =document.createElement('img')
        img.src= e.gif.images.downsized.url;
        img.addEventListener("click",()=>{
           details_gif(e.gif.id)
        })
      
        gif.append(name,img)
   
    })
}

const gif= async()=>{
    try{
        let gif= document.getElementById("gif")
        gif.innerHTML=null;

        let query = document.getElementById("search").value;
        if(query==""){
            alert("please provide your input")

        }
        let res =await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`)
        let data =await res.json();
        //console.log(data.data)

        data.data.forEach((e)=>{
            let name=document.createElement("p")
          name.innerHTML=e.title;
          
          let img =document.createElement('img')
         img.src= e.images.downsized.url;
         img.addEventListener("click",()=>{
          details_gif(e.id)
            })
   
          gif.append(name,img)

        })
         

        
        
     }
      catch(error){
     console.log(error)
       }
}
const translates= async()=>{
    try{
        let gif= document.getElementById("gif")
        gif.innerHTML=null;

        let query = document.getElementById("search").value;
        if(query==""){
            alert("please provide your input")

        }
        let res =await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=${APIKEY}&s=`)
        let data =await res.json();
         //console.log(data)

       
            let name=document.createElement("p")
          name.innerHTML=data.data.title;
          
          let img =document.createElement('img')
         img.src= data.data.images.downsized.url;
         img.addEventListener("click",()=>{
          details_gif(data.data.id)
            })
   
          gif.append(name,img)

        
         

        
        
     }
      catch(error){
     console.log(error)
       }
}