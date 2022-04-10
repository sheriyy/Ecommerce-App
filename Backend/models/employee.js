const mongoose = require("mongoose");

const employees = mongoose.Schema({
  email: { type: String, unique: true },
  name: String,
  address: String,
  department: String,
  contactNo: Number,
  password: String,
  isDeleted: Number,
});

module.exports = mongoose.model("Employees", employees);
