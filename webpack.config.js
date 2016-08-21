/**
 * Created by littlemacarole on 2016/8/16.
 */
var webpack=require('webpack');
//var commonsPlugin=new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports={
   //插件项
   // plugins:[commonsPlugin],
    entry:{
        index:'./src/js/page/',
        music:'./src/js/page/music.js'
    },
    output:{
        path:'dist',
        filename:'[name].bundle.js'
    },
    //module:{
    //    loaders:[
    //        {test:/\.css$/,loader:'style-loader!css-loader'},
    //        {test:/\.js$/,loader:'jsx-loader?harmony'},
    //        {test:/\.scss$/,loader:'style!css!sass?sourceMap'},
    //        {test:/\.(png|jpg)$/,loader:'url-loader?limit=8192'}
    //    ]
    //},
    //resolve:{
    //    root:'E:/github/flux-example/src',
    //    extensions:['','.js','.json','.scss'],
    //    alias:{
    //        AppStore:'js/stores/AppStores.js',
    //        ActionType:'js/actions/ActionType.js',
    //        AppAction:'js/actions/AppAction.js'
    //    }
    //}
};