const express = require("express"); // import Express to our application
const router = express.Router(); // create a router variable allowing us to create our route --> but we need to export this router

// Gets All Authors Route
router.get("/", (req, res) => {
  res.render("authors/index");
}); // (/) Creating the route of our application using the GET action, which is localhost:3000, then we pass a function with two parameters: request, response sending it back

// we need to import this file into our server

// Display New Author Route form
router.get("/new", (req, res) => {
  res.render("authors/new");
});

// Create New Author Route
router.post("/", (req, res) => {
  //Instead of reading (get), we are creating data (post)
  res.send("Create"); // instead of rendering/displaying, we are sending the data
});

module.exports = router; //exporting router
