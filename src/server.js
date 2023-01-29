require("dotenv").config();
const express = require("express"); // import express from 'express'
const app = express();
const fileUpload = require("express-fileupload");
app.use(fileUpload());

const webRoute = require("./routes/web");
const apiRoute = require("./routes/api");

const port = process.env.PORT || 8888;
const configViewEngine = require("./configs/viewEngine.js");
const connection = require("./configs/database");

// config template view engine
configViewEngine(app);

// config req.body: get data from form
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

//khai báo route
app.use("/", webRoute);
app.use("/v1/api", apiRoute);
(async () => {
  await connection();
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
})(); // anonymous function
