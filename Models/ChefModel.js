const mongoose = require("mongoose");

const chefSchema = new mongoose.Schema({
  name: String,
  nationality: String,
  age: Number,
});

module.exports = mongoose.model("Chef", chefSchema);
