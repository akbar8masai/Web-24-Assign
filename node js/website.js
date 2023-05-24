const http = require('http')
const fs = require('fs');

const port = process.env.PORT ||3000 ;

const server =http.createServer((req,res)=>{
  
    res.statusCode=200;
    res.setHeader(  'Content-Type', 'text/html' );
    console.log(req.url);
    if(req.url =="/"){
        res.statusCode=200;
        res.end('okay hello'); 
    }else if(req.url=="/About"){
        res.statusCode=200;
        res.end('about'); 
    }
    else if(req.url=="/hello"){
        res.statusCode=200;
        const data = fs.readFileSync("index.html")
        res.end(data.toString()); 
    }else{
        res.statusCode= 404;
        res.end('not found'); 
    }
})
server.listen(port,()=>{
  console.log(`server is listening on port ${port}`)
})