const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 4000;
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const main = require("./services/create");
const userRoute = require("./router/userRoute");
const roomRoute = require("./router/roomRoute");
const bioRoute = require("./router/bioRoute");
const cors = require("cors");

// swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJSON = require("./swagger.json");
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerJSON));

// ejs
app.set("view engine", "ejs");

// database
main();

// config
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

// Route
app.use("/", userRoute);
app.use("/bio", bioRoute);
app.use("/room", roomRoute);

// server running
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
