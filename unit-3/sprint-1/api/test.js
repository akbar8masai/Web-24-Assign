// method-1
//fetch("https://reqres.in/api/users?page=2")
// .then(function(res){
//     res.json().then(function(res){
//         console.log(res.data);
//     })
// })
// .catch(function(err){
//     console.log(err);
// })

// ----------------------------------------
// method-2
async function append(){
    let res= await fetch("https://reqres.in/api/users?page=2")
   let data =await  res.json()
    console.log(data.data);
}

append()
