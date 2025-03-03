const express = require("express");
const router = express.Router();
const Chef = require("../Models/ChefModel");

router.get("/all", async (req, res) => {
  const chefs = await Chef.find();
  res.json(chefs);
});

router.get("/names", async (req, res) => {
  const chefs = await Chef.find({}, "name");
  res.json(chefs);
});

router.get("/recettes", async (req, res) => {
  const chefs = await Chef.aggregate([
    {
      $lookup: {
        from: "recettes",
        localField: "_id",
        foreignField: "chef",
        as: "recettes",
      },
    },
    {
      $project: {
        name: 1,
        numRecettes: { $size: "$recettes" },
      },
    },
  ]);
  res.json(chefs);
});

router.post("/add", (req, res) => {
  const chef = new Chef(req.body);
  chef.save().then((newChef) => res.json(newChef));
});

router.put("/update/:name", (req, res) => {
  Chef.updateOne({ name: req.params.name }, req.body).then((updatedChef) =>
    res.json(updatedChef)
  );
});

router.delete("/delete/:name", (req, res) => {
  Chef.deleteOne({ name: req.params.name }).then(() =>
    res.json({ message: "Chef deleted" })
  );
});

module.exports = router;
