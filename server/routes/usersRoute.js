const express = require("express");
const UserModel = require("../models/userModel");
const router = express.Router();

//Register Endpoint
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

//Login EndPoint
router.post("/login", async (req, res) => {
  const { mail, password } = req.body;

  try {
    const user = await UserModel.find({ mail: mail, password: password });

    if (user.length > 0) {
      res.send(user[0]);
    } else {
      res.send("böyle bir kullanıcı yok");
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
