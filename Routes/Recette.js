const express = require("express");
const router = express.Router();
const Recette = require("../Models/RecetteModel");

router.get("/all", async (req, res) => {
  const recettes = await Recette.find();
  res.json(recettes);
});

router.get("/names", async (req, res) => {
  const recettes = await Recette.find({}, "name");
  res.json(recettes);
});

router.post("/add", (req, res) => {
  const recette = new Recette(req.body);
  recette.save().then((newRecette) => res.json(newRecette));
});

router.put("/update/:name", (req, res) => {
  Recette.updateOne({ name: req.params.name }, req.body).then(
    (updatedRecette) => res.json(updatedRecette)
  );
});

router.delete("/delete/:name", (req, res) => {
  Recette.deleteOne({ name: req.params.name }).then(() =>
    res.json({ message: "Recipe deleted" })
  );
});

module.exports = router;
