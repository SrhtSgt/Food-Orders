const express = require("express");
const UserModel = require("../models/userModel");
const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, mail, password } = req.body;

  const newUser = new UserModel({
    name: name,
    mail: mail,
    password: password,
  });

  try {
    await newUser.save();
    res.send("user register successfully");
  } catch (error) {
    res.send("user register failed");
  }
});

module.exports = router;
