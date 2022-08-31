const app = require("./app");

const PORT = 4000;

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));



























































// var express = require("express");
// // import bodyParser from "body-parser";
// var date = new Date();
// const app = express();
// const port = 8085;

// //set view engine tp ejs
// // app.set("view engine", "EJS");

// //set the views folder
// //app.set("views", "./views");

// const mylogger = function(req,res,next) {
//     console.log(`Request received at ${date.toLocaleString()}`);
// };

// app.get("/",(req,res) => {
//     //res.render("Home");
//     mylogger();
// });

// app.get("/ourServices", (req,res) => {
//     //res.render("OurServices");
//     mylogger();
// });

// app.get("/contactUs", (req,res) => {
//     //res.render("ContactUs");
//     mylogger();
// });
