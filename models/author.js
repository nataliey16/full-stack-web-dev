const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: {
    type: String, //key
    required: true, //value
  },
});

module.exports = mongoose.model("Author", authorSchema);
