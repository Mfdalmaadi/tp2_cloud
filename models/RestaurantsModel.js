const mongoose = require("mongoose");

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  openingYear: { type: Number, required: true },
  chefs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chef" }],
  recettes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recette" }],
});

module.exports = mongoose.model("Restaurant", restaurantSchema);
