const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const vuser = "admin";
const vpass = "admin";
const JWT_SECRET = "its_a_secret";

router.post("/user/login", (req, res) => {
  const { username, password } = req.body;
  if (username === vuser && password === vpass) {
    jwt.sign(
      { user: "admin" },
      JWT_SECRET,
      { expiresIn: "60s" },
      (err, token) => {
        if (!err) res.json({ token });

        res.status(401).json({ message: err });
      }
    );
  }
});

module.exports = router;
