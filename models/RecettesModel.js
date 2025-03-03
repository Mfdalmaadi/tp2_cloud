const mongoose = require("mongoose");

const recetteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: [String], required: true },
  chef: { type: mongoose.Schema.Types.ObjectId, ref: "Chef", required: true },
});

module.exports = mongoose.model("Recette", recetteSchema);
