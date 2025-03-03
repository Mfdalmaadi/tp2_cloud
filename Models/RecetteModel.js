const mongoose = require("mongoose");

const RecetteSchema = new mongoose.Schema({
  name: String,
  ingredients: [String],
  timeToCook: Number,
  chef: { type: mongoose.Schema.Types.ObjectId, ref: "Chef" },
});

module.exports = mongoose.model("Recette", RecetteSchema);
