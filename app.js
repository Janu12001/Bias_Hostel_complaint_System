require("dotenv").config();
const express= require("express");
const bodyparser= require("body-parser"); 
const { json } = require("body-parser");  
const db = require("./config/mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");



const app= express();

app.use(cookieParser());
app.use(cors());


// middlewires
app.use(bodyparser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.use('/js', express.static(__dirname + './js'));


//Use Express Route
app.use("/", require("./routes/index"));

const port = process.env.PORT || 3000;


app.listen(port, function(){
    console.log(`Server started on port ${port}`);
});




 






