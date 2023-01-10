let arr=[1,2,3,4,5,6]
let res=arr.map(function(ele,i){
    let sum=0;
    if(ele%3==0)

    sum+=(ele**3)
    // console.log(sum)
    return sum
})
//console.log(res)
let res1=res.reduce(function(acc,el,i,array){
    return acc+el
})

console.log(res1)