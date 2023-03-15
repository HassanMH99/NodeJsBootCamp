const http =require('node:http')
const fs = require('fs')
const server = http.createServer((req,res)=>{
    if (req.method !== 'GET') {
        res.writeHead(405);
        return res.end();
      }
    if(req.url==='/rawhtml'){
        const readhtml = fs.readFileSync('./index.html')
        res.end(readhtml);
    }else if(req.url==='/users'){
        const readusers = fs.readFileSync(__dirname+'/./users.json')
        res.end(readusers);
    }  
})
server.listen(3000,()=>{console.log('The server with port 3000');})