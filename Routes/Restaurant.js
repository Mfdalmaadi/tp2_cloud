const express = require("express");
const router = express.Router();
const Restaurant = require("../models/RestaurantsModel");

// Get all restaurants
router.get("/all", async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a restaurant
router.post("/add", async (req, res) => {
  const restaurant = new Restaurant(req.body);
  try {
    const savedRestaurant = await restaurant.save();
    res.status(201).json(savedRestaurant);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
