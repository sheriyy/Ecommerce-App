const express = require("express");
const router = express.Router();
const employeeControllers = require("../controllers/employee");
// const loginControllers = require("../controllers/login");

router.get("/getEmployee", employeeControllers.getEmployeeList);
router.post("/createEmployee", employeeControllers.createEmployee);
router.put("/updateEmployee", employeeControllers.updateEmployee);
router.delete("/deleteEmployee/:id", employeeControllers.deleteEmployee);
// router.post("/login", loginControllers.loginUser);

module.exports = router;
