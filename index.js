const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user");
const app = express();
app.use(express.urlencoded({ extended: false }));
mongoose
  .connect(
    "mongodb+srv://test:Test%40111@cluster0.dui2k.mongodb.net/TestOne?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("DB connect"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.end("Hello from server");
});
app.post("/create", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.create(req.body);
    res.json({ status: true, data: user });
  } catch (error) {
    res.json({ status: false, data: error.message });
  }
});

app.listen(5000, console.log("Server running on port 5000"));
