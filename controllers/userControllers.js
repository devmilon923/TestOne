const loginController = (req, res) => {
  res.end("Login");
};
const createController = (req, res) => {
  res.end("Create");
};

module.exports = {
  loginController,
  createController,
};
