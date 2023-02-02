const express = require("express");
const router = express.Router();

const {
  getUsersAPI,
  postAUserAPI,
  putAUserAPI,
  deleteAUserAPI,
  postUploadSingleFile,
  postUploadMultipleFile,
} = require("../controllers/apiController");

const { getAllCustomers, postCreateCustomer } = require("../controllers/customerController");

router.get("/user", getUsersAPI);
router.put("/user", putAUserAPI);
router.post("/user", postAUserAPI);
router.delete("/user", deleteAUserAPI);

router.post("/file", postUploadSingleFile);
router.post("/files", postUploadMultipleFile);

router.get("/customer", getAllCustomers);
router.post("/customer", postCreateCustomer);

module.exports = router;
