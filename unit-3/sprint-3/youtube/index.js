// 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]' \
//AIzaSyAOIJCHqbLbc3w579FWzNbMrsz6Dt7PEQQ =api key
// const is necessary to use 
// make fetch call

import {navbar} from './navbar.js'

let navbar_div =document.getElementById('navbar')

navbar_div.innerHTML = navbar()

//add event handler

let search_btn = document.getElementById('search_button')

search_btn.onclick =()=>{
  //console.log("sdafg")
  searchvideos()
}

const searchvideos = async ()=>{
   
   
    // .then .catch
    //async await

  try{
    
    const API_KEY = `AIzaSyAOIJCHqbLbc3w579FWzNbMrsz6Dt7PEQQ`

    let search_term =document.getElementById('search_term').value

    let response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${search_term}&key=${API_KEY}`)
       
    
  
    let data =await response.json()
      let actual_data =data.items;
      
      appendvideos(actual_data)
      console.log(actual_data);
  
  }

  catch(err){
    console.log(err);
  }



};
const container =document.getElementById('container')

const appendvideos =(data)=>{

    container.innerHTML=null;
 data.forEach(({snippet, id :{videoId}})=>{
    
    let div =document.createElement("div")

    let p_title =document.createElement("p")
    p_title.innerText=snippet.title
   
    let p_channel_name = document.createElement("p")
    p_channel_name.innerText=snippet.channelTitle

    let thumbnail = document.createElement("img")
    thumbnail.src=snippet.thumbnails.high.url;
   
    div.append(thumbnail,p_title,p_channel_name)
    console.log("get on s/appenfd")

    //add event handler to div 
   div.onclick =() =>{
    console.log("get on click")

    let data = {
        snippet,
        videoId,
    };
   
   // console.log(snippet,videoId);
    data =JSON.stringify(data);

    localStorage.setItem('clicked_video',data);

    window.location.href ='/unit-3/sprint-3/youtube/loadvideo.html'
    
   };

    container.append(div);
 })

}
