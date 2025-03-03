const express = require("express");
const router = express.Router();
const Restaurant = require("../Models/RestaurantModel");

router.get("/all", async (req, res) => {
  const restaurants = await Restaurant.find();
  res.json(restaurants);
});

router.get("/chefs/:restaurantname", async (req, res) => {
  const restaurant = await Restaurant.findOne({
    name: req.params.restaurantname,
  }).populate("chefs");
  res.json(restaurant.chefs);
});

router.get("/recettes/:restaurantname", async (req, res) => {
  const restaurant = await Restaurant.findOne({
    name: req.params.restaurantname,
  }).populate("recettes");
  res.json(restaurant.recettes);
});

router.get("/listCategorie/:category", async (req, res) => {
  const restaurants = await Restaurant.find({ category: req.params.category });
  res.json(restaurants);
});

router.get("/:annee1/:annee2", async (req, res) => {
  const restaurants = await Restaurant.find({
    openingYear: { $gte: req.params.annee1, $lte: req.params.annee2 },
  });
  res.json(restaurants);
});

router.post("/add", (req, res) => {
  const restaurant = new Restaurant(req.body);
  restaurant.save().then((newRestaurant) => res.json(newRestaurant));
});

router.put("/update/:name", (req, res) => {
  Restaurant.updateOne({ name: req.params.name }, req.body).then(
    (updatedRestaurant) => res.json(updatedRestaurant)
  );
});

router.delete("/delete/:name", (req, res) => {
  Restaurant.deleteOne({ name: req.params.name }).then(() =>
    res.json({ message: "Restaurant deleted" })
  );
});

module.exports = router;
