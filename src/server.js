require('dotenv').config();
const express = require('express'); // import express from 'express'
const app = express();
const { MongoClient } = require('mongodb');
const fileUpload = require('express-fileupload');
app.use(fileUpload());

const webRoute = require('./routes/web');
const apiRoute = require('./routes/api');

const port = process.env.PORT || 8888;
const configViewEngine = require('./configs/viewEngine.js');
const connection = require('./configs/database');

// config template view engine
configViewEngine(app);

// config req.body: get data from form
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data

//khai báo route
app.use('/', webRoute);
app.use('/v1/api', apiRoute);

(async () => {
  try {
    // const url = process.env.DB_WITH_DRIVER;
    // const client = new MongoClient(url);

    // const dbName = 'tuanna';

    // await client.connect();
    // console.log('Connected successfully to server');
    // const db = client.db(dbName);
    // const Customer = db.collection('Customers');
    // const customer = await Customer.findOne({
    //   name: 'test 10',
    // });
    await connection();
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
})(); // anonymous function
