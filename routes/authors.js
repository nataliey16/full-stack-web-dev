const express = require("express"); // import Express to our application
const router = express.Router(); // create a router variable allowing us to create our route --> but we need to export this router
const Author = require("../models/author"); // importing the Author variable from models

// Gets All Authors Route
router.get("/", async (req, res) => {
  let searchOptions = {};

  if (req.query.name != null && req.query.name !== "") {
    searchOptions.name = new RegExp(req.query.name, "i");
  }
  try {
    const authors = await Author.find({});
    res.render("authors/index", { authors: authors, searchOptions: req.query });
  } catch {
    res.redirect("/");
  }
}); // (/) Creating the route of our application using the GET action, which is localhost:3000, then we pass a function with two parameters: request, response sending it back

// we need to import this file into our server

// Display New Author Route form
router.get("/new", (req, res) => {
  res.render("authors/new", { author: new Author() });
});

// Create New Author Route
router.post("/", async (req, res) => {
  //Instead of reading (get), we are creating data (post)
  const author = new Author({
    name: req.body.name,
  });
  try {
    const newAuthor = await author.save();
    // res.redirect(`authors/${newAuthor.id}`);
    res.redirect("authors");
  } catch {
    res.render("authors/new", {
      author: author,
      errorMessage: "Error creating Author",
    });
  }
});

module.exports = router; //exporting router
