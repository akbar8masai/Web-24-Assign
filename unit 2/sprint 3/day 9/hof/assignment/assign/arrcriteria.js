let arr=[2, 4, 5, 3, 6, 8]

let res=arr.filter(function(ele,i){
    if(i%2==0 && ele%2==0)
    return ele

})
console.log(res)