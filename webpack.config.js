/**
 * Created by littlemacarole on 2016/8/16.
 */
module.exports={
    entry:'./src/app.js',
    output:{
        path:'./dist',
        filename:'app.bundle.js'
    },
    module:{
        loaders:[
            {test:/\.js$/,exclude:/node_modules/,loader:'babel-loader'}
        ]
    }
};