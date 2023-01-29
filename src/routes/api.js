const express = require("express");
const router = express.Router();
const {
  getAPIPage,
  getUsersAPI,
  postAUserAPI,
  putAUserAPI,
  deleteAUserAPI,
  postUploadSingleFile,
  postUploadMultipleFile,
} = require("../controllers/apiController");

router.get("/", getAPIPage);
router.put("/users", putAUserAPI);
router.get("/users", getUsersAPI);
router.post("/users", postAUserAPI);
router.delete("/users", deleteAUserAPI);

router.post("/file", postUploadSingleFile);
router.post("/files", postUploadMultipleFile);
module.exports = router;
