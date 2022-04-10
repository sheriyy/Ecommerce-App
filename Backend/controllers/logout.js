const jwt = require("jsonwebtoken");

const logoutUser = async (req, res) => {
  console.log("logout");
  //   res.cookie("token", "", { expiresIn: "1s" });
  res.clearCookie("token");
  res.send({ data: "logout" });
};

module.exports = {
  logoutUser,
};
