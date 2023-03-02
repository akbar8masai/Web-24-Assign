
// let arr=[]
// let arr2=[]

// for(let i=0;i<5;i++){
//     if(arr.include(i) && arr2.include(i+1)){
//         arr.push(i+2)
//         arr2.push(i+3)
//     }else{
//         arr.push(i)
//         arr2.push(i+2)
//     }
// }

// -------------------------------------------------

// let array=[0 ,1 ,1 ,1, 0 ,0, 1]
// let k=4

// let ration={"flour":550,"rice":240,"sugar":84,"pulse":159,"bread":80,"milk":160,"oil":252}

// let key = Object.keys(ration)



// console.log(key);
// let sum=0;
// array.forEach((el,index)=> {
//     //console.log(key[index]);
    
  
//     if(el==1){
//       sum+=(ration[key[index]]*k)
       
//     }
// });
// if(array!==0){
// console.log(sum)}
// else{
//     console.log(-1);
// }

// ----------------------------------

// let arr=[]
// 6
// 1 15
// 1 20
// 2
// 3
// 2
// 3

// arr.push(15)
// arr.push(20)
// arr.splice(1,1)
// console.log(arr);
// if(arr.length>0){
//     arr.forEach((e,i)=>{
//         if(arr.length-1 == i){
//             console.log(e);
//         }
//     })
// }
// arr.splice(0,1)
// if(arr.length>0){
//     arr.forEach((e,i)=>{
//         if(arr.length-1 == i){
//             console.log(e);
//         }
//     })
// }else{
//     console.log("empty!");
// }

// ------------------------------------------------------------

// 3
// 3 2 1
// 1 3 2

let a=[3,2,1]
let b=[1,3,2]

let count=0;

for(let i=0;i<a.length;i++){
    
    var temp = a[i+1];
    a[i+1] = a[i];
    a[i] = temp;
      console.log(a);
    }
 


// JSON.stringify(a) === JSON.stringify(b)