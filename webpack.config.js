const path = require("path");
/*
    www.webpack.js.org
*/
module.exports={

    entry:"./src/app.js",
    output:{
        path:path.join(__dirname,"public"),
        filename:"bundle.js"
    },
    mode:"development",
    module:{
        rules:[{
                loader:"babel-loader", //load js files with babel loader
                test:/\.js$/, // read just .js files
                exclude:/node-modules/ //do not read nodeM folder
            },
            {
                test:/\.s?css$/, // ? makes s optional and load .scss or .css files
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    devtool:'cheap-module-eval-source-map' ,// this one is for debugin to show the exact line where
                                            // the error occurs we have it comes with webpack
    devServer:{ // to set the development server to serve the public folder "index.html"
        contentBase:path.join(__dirname,"public"),
        historyApiFallback:true // this lets the server to load index.Html everyTime we have hit a router endpoint
    }
}