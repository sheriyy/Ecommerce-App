const Employee = require("../models/employee");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  let empData = await Employee.find({ email: req.body.email });
  if (empData[0]) {
    if (bcrypt.compareSync(req.body.password, empData[0].password)) {
      const token = jwt.sign(
        {
          email: empData[0].email,
          userId: empData[0]._id,
          name: empData[0].name,
        },
        "secret",
        { expiresIn: "1hr" }
      );
      res.cookie("token", token, { httpOnly: "true" });
      res.send({
        data: empData[0].name,
        message: "Logged in",
        success: true,
        token: token,
      });
    } else {
      res.send({ message: "Incorrect password" });
    }
  } else {
    res.send({ message: "Register Now", success: false });
  }
};

module.exports = {
  loginUser,
};
