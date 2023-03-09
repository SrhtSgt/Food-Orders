const express = require("express");
const burgerModel = require("../models/burgerModel");
const router = express.Router();

//GET ALL FOODS endpointi
router.get("/getBurgers", (req, res) => {
  burgerModel.find({}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
