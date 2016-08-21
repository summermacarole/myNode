/**
 * Created by littlemacarole on 2016/8/17.
 */
var http=require('http');
http.createServer(function(req,res){
    res.write('hello');
    res.end('respond end');
}).listen(3000,'localhost');
console.log('your server is running');