const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port,function(){ //callback function
    console.log("Server is running....");
})
require("./src/db/database");
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static("public"));
app.set("view engine","ejs")




const productrouter = require("./src/routes/product.router");
app.use("/product", productrouter);