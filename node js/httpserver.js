const http = require('http')

const port = process.env.PORT ||3000 ;

const server =http.createServer((req,res)=>{
    console.log(req.url);

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('okay hello'); 
 
})
server.listen(port,()=>{
  console.log(`server is listening on port ${port}`)
})