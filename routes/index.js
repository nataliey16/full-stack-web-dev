//STEP 3
const express = require("express"); // import Express to our application
const router = express.Router(); // create a router variable allowing us to create our route --> but we need to export this router

router.get("/", (req, res) => {
  res.render("index");
}); // (/) Creating the route of our application using the GET action, which is localhost:3000, then we pass a function with two parameters: request, response sending it back

// we need to import this file into our server

module.exports = router; //exporting router
