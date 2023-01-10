let arr=[1,2,3,4]
let res=arr.reduce(function(acc,ele,i,array){
    let sum=0;
    if(ele%2!==0)
   sum+=ele
   return acc+sum
})
console.log(res)