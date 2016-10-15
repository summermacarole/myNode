var querystring=require('querystring'),
    dns=require('dns');
exports.parseDns=function(res,req){
    var postData='';
    req.addListener('data',function(postDataChunk){
        postData+=postDataChunk;
    })
    req.addListener('end',function(){
        var domain=querystring.parse(postData).search_dns;
        dns.resolve(domain,function(err,addresses){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end('<html>'+
                '<head>'+
                '<meta charset="UTF-8">'+
                '</head>'+
                '<body>'+
                '<div style="text-align: center">'+
                'Domain: <span style="color: red;">'+domain+'</span>'+
                'IP: <span style="color: red;">'+addresses.join(",")+'</span>'+
                '</div>'+
                '</body>'+
                '</html>')
        })
    })
}