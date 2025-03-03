const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: String,
  country: String,
  rating: Number,
  category: String,
  openingYear: Number,
  chefs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chef" }],
  recettes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recette" }],
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
