const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  // const authHeader = req.header("authorization");
  const token = req.cookies.token;
  console.log("4", token);
  try {
    // if (token) {
    const user = jwt.verify(token, "secret");
    //  const user = jwt.verify(authHeader, "secret");
    console.log("10", user);
    req.userData = user;
    // }
    next();
  } catch (err) {
    res.clearCookie("token");
    res.send({ message: "Authentication fail" });
  }
};
