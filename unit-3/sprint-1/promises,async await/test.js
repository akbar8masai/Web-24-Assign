// function append(s){

// let script= document.createElement("script")
// script.src=s

// document.head.append(script)
// //console.log(document);

// //hello()// dependent on script to get completely loaded

// // setTimeout(function(){
 
// //     hello()

// // },3000)



// }
// append("./myscript.js")


// var mypromise = new Promise(function(resolve,reject){

//     //resolve("success")

//     reject("goodbye")
// })

// console.log(mypromise);


// --------------------------------------------

function append(s){


return mypromise = new Promise(function(resolve,reject){
   
    let script= document.createElement("script")
     script.src=s

     
     document.head.append(script)

     script.onload =function(){
        resolve("script loading done")
     }

     script.onerror =function(){
       
        reject("not loaded")

     }
        
    
        
    })
    
}
// ------------------------------------+


//  append("./myscript.js") 
//  .then(function (res){

//    hello()

//     append("./myscript2.js").then(function(res){

//         hello2()
//     })

//  })

//  .catch(function (e){
//     console.log(error);
    
//  })

// -----------------------------------------------

async function handlevalue(){



let res= await append("./myscript.js")

hello2()
console.log(res);






}

handlevalue()