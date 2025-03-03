const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(`${process.env.URL_MONGOOSE}/${process.env.DBNAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

// Routes
const chefsRoute = require("./routes/chef");
const recettesRoute = require("./routes/recette");
const restaurantsRoute = require("./routes/restaurant");

app.use("/chefs", chefsRoute);
app.use("/recettes", recettesRoute);
app.use("/restaurants", restaurantsRoute);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
