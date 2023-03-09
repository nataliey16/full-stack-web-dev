if (process.env.NODE_ENV !== "production") {
  //This will check if we are in our production (development enviornment) if its NOT equal to production. its not in development environment.
  require("dotenv").config(); //If this is the case (not in production mode/development enviornment), we want to parse the differenet dependencies
}

//STEP 1
const express = require("express"); //import express in express library
const app = express(); //get app function by calling express function
const expressLayouts = require("express-ejs-layouts"); // get express layouts package

const indexRouter = require("./routes/index"); //import the new index.js file we made in relative file ./
const authorRouter = require("./routes/authors"); //import the new index.js file we made in relative file ./

//Below: Configure Express Application
//STEP 2
app.set("view engine", "ejs"); // set our view engine - set using ejs
app.set("views", __dirname + "/views"); // set where our views are coming from - we put all server rendered views in a views directory (current directory name + views)
app.set("layout", "layouts/layout"); // set up layout folder/file so every single file will be put in this file - thus, won't need to duplicate the header and footer HTML
app.use(expressLayouts); //Tell express app that we want to use Express layouts from above
app.use(express.static("public")); //Tell express where our public files (html,css, js, imgs...) are located -

const mongoose = require("mongoose"); // import mongoose
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }); //connect mongoose to our local server (later web server once web is deployed)
const db = mongoose.connection;

db.on("error", (error) => console.error(error)); //if we run into an error, this will print it out in red text in console
db.once("open", () => console.log("Connected to Mongoose")); // If it connects for the firsttime when we open database, it will tell us connected to mongoose

app.use("/", indexRouter); // Now we can use what we imported, but youll notice it crashes bc we haven't exported the index.js
app.use("/authors", authorRouter); // Now we can use what we imported, but youll notice it crashes bc we haven't exported the index.js

app.listen(process.env.PORT || 3000); // Tell app we want to listen to a specific Port = pulls from an enviornment variable for when we deploy. The server will tell us what port it is listening to. For now we are going to default to port 3000 since the server isnt telling us anyone from hosting platform
