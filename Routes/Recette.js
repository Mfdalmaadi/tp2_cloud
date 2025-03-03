const express = require("express");
const router = express.Router();
const Recette = require("../models/RecettesModel");

// Get all recettes
router.get("/all", async (req, res) => {
  try {
    const recettes = await Recette.find().populate("chef");
    res.json(recettes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a recette
router.post("/add", async (req, res) => {
  const recette = new Recette(req.body);
  try {
    const savedRecette = await recette.save();
    res.status(201).json(savedRecette);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
