let a=[3,2,1]
let b=[1,3,2]

// let count=0;

// for(let i=0;i<a.length;i++){
    
//     var temp = a[i+1];
//     a[i+1] = a[i];
//     a[i] = temp;
//       console.log(a);
//      break
//     }
function k(arr,n)
{
     
    let arrPos = [];
    for (let i = 0; i < n; i++)
    {
      arrPos.push([arr[i],i]);
    }
    arrPos.sort(function(a,b){return a[0]-b[0];});
    let vis = new Array(n);
    for(let i=0;i<n;i++)
    {
        vis[i]=false;
    }
    let ans = 0;
    for (let i = 0; i < n; i++)
    {
      if (vis[i] || arrPos[i][1] == i)
        continue;
      let cycle_size = 0;
      let j = i;
      while (!vis[j])
      {
        vis[j] = true;
        j = arrPos[j][1];
cycle_size++;
      }
      ans += (cycle_size - 1);
    }
    return ans;
}
function swap(a,b,n)
{
    let mp = new Map();
  
    for (let i = 0; i < n; i++)
    {
      mp.set(b[i], i);
    }
    for (let i = 0; i < n; i++)
      b[i] = mp.get(a[i]);
    return k(b, n);
}
 
// Driver code

let n = a.length;
console.log( swap(a, b, n)+n);