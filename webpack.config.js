const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
   
/*
    www.webpack.js.org
*/
module.exports=( env , argv)=>{
    //console.log("Env " + env)
    const isProduction = env ==="production";
    const loader = isProduction ? MiniCssExtractPlugin.loader: 'style-loader';
    return({
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
                          // "style-loader", // 2.inject <style> into the dom
                        loader,
                        {
                            loader: "css-loader",
                            options:{
                                sourceMap:true
                            }
                        }, //2.turns css into javaScript
                        {
                            loader:"sass-loader",
                            options:{
                                sourceMap:true
                            }
                            
                        } // 1.turns sass into css
                    ]
                }
            ]
        },
        devtool: isProduction ? 'source-map': 'cheap-module-eval-source-map' ,// this one is for debugin to show the exact line where
                                                // the error occurs we have it comes with webpack
        devServer:{ // to set the development server to serve the public folder "index.html"
            contentBase:path.join(__dirname,"public"),
            historyApiFallback:true // this lets the server to load index.Html everyTime we have hit a router endpoint
        },
        plugins: [
            new MiniCssExtractPlugin({filename:'styles.css'}),
        ],
 })
}