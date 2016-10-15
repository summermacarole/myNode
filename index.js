/*首先require加载俩模块*/
var http=require('http'),
    url=require('url');
/*加载文件模块*/
var router=require('./router.js');


/*创建http服务器*/
http.createServer(function(req,res){
    req.setEncoding('utf-8');
    res.writeHead(200,{'Content-Type':'text/html'})
    var pathname=url.parse(req.url).pathname;
    router.router(res,req,pathname);
}).listen(3000)