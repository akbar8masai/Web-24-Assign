const fs = require('fs');

// fs.readFile('index.txt','utf-8',(err,data)=>{
//   console.log(err,data)
// })

//refer filesystem in node js docs

// const a =fs.readFileSync('file.txt')
// console.log(a.toString())

// fs.writeFile('file2.txt',"this is message",()=>{
//     console.log("written to file")
// })

b=fs.writeFileSync('file2.txt',"this is message2")
console.log(b)

console.log("finished reading file")