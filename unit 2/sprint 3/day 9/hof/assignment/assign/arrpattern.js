let arr=["assignment", "problem", "media", "upload"]
let sub=[]
let res=arr.map(function(ele,i){
    let x=ele.split("")
   return x;
})
let res1=res.map(function(el,i){
    let flag=false;
    for(let i=0;i<el.length;i++){
        if(el[0]=="a" || el[el.length-1]=="a"){
          flag=true;
        }

    }
    if(flag==true){
        sub.push(el.join(""))
    }
})
console.log(sub)