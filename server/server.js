const path = require("path")
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
//which file u want to serve
const publicPath= path.join(__dirname,"..","public");

app.use(express.static(publicPath));

// this one to serve always the index.html so our router will work
app.get("*", (req, res)=>{
    console.log(req, ' --- ', res)
    res.sendFile(path.join(publicPath,"index.html"))
})

app.listen(port, ()=>{
    console.log("server is runing on port localhost:3000")
})
