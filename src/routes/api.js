const express = require('express');
const router = express.Router();

const {
  getUsersAPI,
  postAUserAPI,
  putAUserAPI,
  deleteAUserAPI,
  postUploadSingleFile,
  postUploadMultipleFile,
} = require('../controllers/apiController');

const {
  getAllCustomers,
  postCreateCustomer,
  postCreateCustomersList,
  putUpdateCustomer,
  deleteCustomer,
  deleteCustomerList,
} = require('../controllers/customerController');
const { postCreateProject, getAllProject, putUpdateProject, deleteProject } = require('../controllers/projectController');
const { postCreateTask, getAllTasks, putUpdateTask, deleteTask } = require("../controllers/taskController");

router.get('/user', getUsersAPI);
router.put('/user', putAUserAPI);
router.post('/user', postAUserAPI);
router.delete('/user', deleteAUserAPI);

router.post('/file', postUploadSingleFile);
router.post('/files', postUploadMultipleFile);

router.get('/customer', getAllCustomers);
router.post('/customer', postCreateCustomer);
router.post('/customers-list', postCreateCustomersList);
router.put('/customer', putUpdateCustomer);
router.delete('/customer', deleteCustomer);
router.delete('/customer-list', deleteCustomerList);

// req.query: dùng cả khi có ít dữ liệu và khi có nhiều dữ liệu
router.get('/info', (req, res) => {
  console.log('>>> check req.query: ', req.query);
  res.send('req.query');
});

// req.params: chỉ dùng khi ít dữ liệu
router.get('/info/:name/:address', (req, res) => {
  console.log('>>> check req.params: ', req.params);
  res.status(200).json({
    data: req.params,
  });
});

router.get('/project', getAllProject);
router.post('/project', postCreateProject);
router.put('/project', putUpdateProject)
router.delete('/project', deleteProject)

router.get('/task', getAllTasks)
router.post('/task', postCreateTask)
router.put('/task', putUpdateTask)
router.delete('/task', deleteTask)


module.exports = router;
