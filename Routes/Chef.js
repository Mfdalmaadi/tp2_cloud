const express = require("express");
const router = express.Router();
const Chef = require("../models/ChefsModel");

router.get("/all", async (req, res) => {
  try {
    const chefs = await Chef.find();
    res.json(chefs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/add", async (req, res) => {
  const chef = new Chef(req.body);
  try {
    const savedChef = await chef.save();
    res.status(201).json(savedChef);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.put("/update/:name", async (req, res) => {
  try {
    const updatedChef = await Chef.findOneAndUpdate(
      { name: req.params.name },
      req.body,
      { new: true }
    );
    res.json(updatedChef);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/delete/:name", async (req, res) => {
  try {
    await Chef.findOneAndDelete({ name: req.params.name });
    res.json({ message: "Chef deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
