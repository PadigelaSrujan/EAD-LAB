const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        fs.readFile('home.html',(err,data)=>{
            if(err){
                res.writeHead(404,{'Content-Type':'text/html'});
                res.write('<h1>Page Not Found</h1>');
                res.end();
            } else {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                res.end();
            }
        });
    } else if(req.url==='/about'){
        fs.readFile('about.html',(err,data)=>{
            if(err){
                res.writeHead(404,{'Content-Type':'text/html'});
                res.write('<h1>Page Not Found</h1>');
                res.end();
            } else {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                res.end();
            }
        });
    } else if(req.url==='/contact'){
        fs.readFile('contact.html',(err,data)=>{
            if(err){
                res.writeHead(404,{'Content-Type':'text/html'});
                res.write('<h1>Page Not Found</h1>');
                res.end();
            } else {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data);
                res.end();
            }
        });
    } else {
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write('<h1>Page Not Found</h1>');
        res.end();
    }
});
server.listen(3001,()=>{
    console.log('Server is running on port 3001');
});