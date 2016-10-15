var fs=require('fs'),
    url=require('url')
exports.mainIndex=function(res,req){
    var readPath=url.parse(req.url).pathname;
    var indexPage=fs.readFileSync('index.html')
    res.end(indexPage)
}