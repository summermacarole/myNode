var ParseDns=require('./parse_dns.js')
var MainIndex=require('./main_index.js')
exports.router=function(res,req,pathname){
    switch (pathname){
        case '/parse':
            ParseDns.parseDns(res,req);
            console.log('我是解析')
            break;
        default:
            MainIndex.mainIndex(res,req);
            console.log('我是首页')
    }
}