let arr=["A", "Good", "Problem"]

let res=arr.map(function(ele,i){
   let x=ele.split("")
   let sum=0;
   if(x.length%2!==0)
   sum+=x.length
  return sum
})

let res1=res.reduce(function(acc,el,i){
    return acc+el
})
console.log(res1)
