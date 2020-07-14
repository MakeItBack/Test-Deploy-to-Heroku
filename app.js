const express	= require("express");
const app 		= express()

app.set("view engine", "ejs");

app.get("/", (req,res)=>{res.render("home");});
app.get("/stuff", (req,res)=>{res.render("stuff");});


app.listen(3000, process.env.IP, ()=>{console.log("Server is running");});
