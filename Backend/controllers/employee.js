const Employee = require("../models/employee");
const bcrypt = require("bcrypt");

const getEmployeeList = async (req, res) => {
  console.log("5", req.cookies.token);
  let empData = await Employee.find({ isDeleted: 0 }).select(["-__v"]);
  res.send({ data: empData, message: "Get data" });
};

const createEmployee = async (req, res) => {
  // console.log("11", req);
  let emailExist = await Employee.find({ email: req.body.email });
  if (emailExist[0]) {
    let empData = await Employee.find({ isDeleted: 0 }).select(["-__v"]);
    res.send({ data: empData, message: "Email already exist!" });
  } else {
    const hashedPasssword = bcrypt.hashSync(req.body.password, 10);
    const { email, name, address, department, contactNo } = req.body;
    const employee = new Employee({
      email,
      name,
      address,
      department,
      contactNo,
      password: hashedPasssword,
      isDeleted: 0,
    });
    employee.save();
    let empData = await Employee.find({ isDeleted: 0 }).select(["-__v"]);
    res.send({ data: empData, message: "User Created Successfully!" });
  }
};

const updateEmployee = async (req, res) => {
  await Employee.findOneAndUpdate({ _id: req.body._id }, req.body, {
    new: true,
  });

  let empData = await Employee.find({ isDeleted: 0 }).select(["-__v"]);
  res.send({ message: "Updated successfully!", data: empData });
};

const deleteEmployee = async (req, res) => {
  await Employee.findOneAndUpdate(
    { _id: req.params.id },
    { isDeleted: 1 },
    {
      new: true,
    }
  );
  let empData = await Employee.find({ isDeleted: 0 }).select(["-__v"]);
  res.send({
    message: "Deleted successfully!",
    data: empData,
  });
};

module.exports = {
  getEmployeeList,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
