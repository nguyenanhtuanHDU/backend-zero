const { User } = require("../models/User");
const { updateUserByID } = require("../services/CRUDservices");
const { uploadSingleFile, uploadMultipleFile } = require("../services/fileUpload");

const getAPIPage = async (req, res) => {
  res.send("Hello from API");
};

const getUsersAPI = async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    errorCode: 0,
    data: users,
  });
};

const postAUserAPI = async (req, res) => {
  let { name, city, email } = req.body;
  const user = await User.create({ name, email, city });
  res.status(200).json({
    errorCode: 0,
    data: user,
  });
};

const putAUserAPI = async (req, res) => {
  const { name, email, city, id } = req.body;
  const user = await updateUserByID(name, email, city, id);
  res.status(200).json({
    errorCode: 0,
    data: user,
  });
};

const deleteAUserAPI = async (req, res) => {
  const { id } = req.body;
  const user = await User.deleteOne({ _id: id });
  res.status(200).json({
    errorCode: 0,
    data: user,
  });
};

const postUploadSingleFile = async (req, res) => {
  const image = req.files.image;
  let results = await uploadSingleFile(image)
  res.send(results)
};

const postUploadMultipleFile = async (req, res) => {
  const images = req.files.images;
  let results = await uploadMultipleFile(images)
  res.send(results);
};

module.exports = {
  getAPIPage,
  getUsersAPI,
  postAUserAPI,
  putAUserAPI,
  deleteAUserAPI,
  postUploadSingleFile,
  postUploadMultipleFile
};
