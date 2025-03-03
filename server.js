require("dotenv").config();
const host = process.env.HOST;
const port = process.env.PORT;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.URL_MONGOOSE);
const db = mongoose.connection;
db.on("error", (err) => console.log("DB connection error"));
db.once("open", () => console.log("Connected"));

const chefs = require("./Routes/Chef");
const recettes = require("./Routes/Recette");
const restaurants = require("./Routes/Restaurant");

app.use("/chefs", chefs);
app.use("/recettes", recettes);
app.use("/restaurants", restaurants);

app.listen(port, () => {
  console.log("Server running on " + port);
});
