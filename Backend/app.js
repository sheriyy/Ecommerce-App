const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const mongoURI = "mongodb://localhost:27017/employee";
const authCheckMiddleWare = require("./Authentication");

mongoose.connect(mongoURI).then(() => {
  console.log("connected successfully...");
});

const commonRoutes = require("./routes");
const loginControllers = require("./controllers/login");
const logoutControllers = require("./controllers/logout");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.post("/login", loginControllers.loginUser);
app.post("/logout", logoutControllers.logoutUser);
app.use("/", authCheckMiddleWare);

app.use("/", commonRoutes);
// app.post("/logout", logoutControllers.logoutUser);
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;
