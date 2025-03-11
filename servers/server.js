const http =require("node:http");
const server = http.createServer( function (req ,res)
{
    
    if(req.url ==='/Home'){
        res.end('Welcome to our home page');
    }
    res.end('Hello World');
});
server.listen(4000)