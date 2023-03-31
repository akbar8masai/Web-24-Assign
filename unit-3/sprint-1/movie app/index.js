
let carousel_div= document.getElementById("carousel")

function carousel(){

let images =["https://shifu.hotstarext.com/SOURCE/VOD/cd-2023-02-22/MHTNM_desk-6c947a7f-7a40-4e6a-bb12-e0f23adda92e.jpg","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8470/1478470-h-211f5b4ce647","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4266/1364266-h-470552ba960d","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8505/1478505-h-4f0093416da6","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5119/1455119-h-2a917e92adac","https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/6756/1476756-h-309c8858e0b2"]



let imgElement= document.createElement("img")
imgElement.src=images[0]
carousel_div.append(imgElement)

let i=1;

setInterval(function(){

if(i == images.length){
    i=1
}

imgElement.src =images[i]
carousel_div.append(imgElement)

//console.log(i)

i++

},3000)


}

carousel()

const movies =[{name:"Baaghi-3",rating:"4",img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9239/1389239-v-b354c74533f6"},
                {name:"hatestory2",rating:"4.2",img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1714/1121714-v-fd6318f27562"},
                 {name:"RRR",rating:"4.5",img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7642/1307642-v-3d3b6c61f97e"},
                 {name:"The Night manager",rating:"4.5",img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4702/1474702-v-100369d7af4c"},
                 {name:"mukundan unni associates",rating:"4.5",img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1158/1451158-v-60ae0c6f2c82"},
                  {name:"saturday night",rating:"4",img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9917/1459917-v-159f6fd1719a"},
                { name:"dear ishq",rating:"4",img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7220/1467220-v-b63ce1315786"},
                  {name:"jhansi s-2",rating:"4.5",img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7257/1467257-v-9cdcdf57beca"},
                 {name:"fall",rating:"4",img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/9490/1429490-v-b6665ae9e72f"}]


function appendMovies(data){
   
    let loader_div =document.getElementById("loader_div")
    loader_div.style.display="none"
    

    let data_div = document.getElementById("movies")
    data_div.innerHTML=null

    data.forEach(function(el){
        let div= document.createElement("div")

        let p_name =document.createElement("p")
        p_name.innerHTML = `Name: ${el.name}`

        let p_rating =document.createElement("p")
        p_rating.innerHTML =`Rating : ${el.rating}`

        let img =document.createElement("img")
        img.id ="poster"
        img.src=el.img

        div.append(img,p_name,p_rating)

        data_div.append(div)
    })
}
appendMovies(movies)

function sortLH(){
    let data= movies;

    data =data.sort((a,b)=> a.rating-b.rating)
    appendMovies(data)
    

}
function sortHL(){
    let data= movies;

    data =data.sort((a,b)=> b.rating-a.rating) 
      appendMovies(data)
}


let getmeData= new Promise(function(resolve,reject){
   

setTimeout(function(){

     let data =movies
     //console.log(data);
     if(data != null){
        resolve(data)
     }else{
        reject("Err:Server could not get movies data")
     }
    },3000)
})

//console.log(getmeData);


getmeData
.then(function(success){

   appendMovies(success)
})

.catch(function(error){

    console.log(error);

}) 