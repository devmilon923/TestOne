const express = require("express");
const {
  loginController,
  createController,
} = require("../controllers/userControllers");

const route = express.Router();

route.get("/login", loginController);
route.get("/create", createController);

module.exports = route;
