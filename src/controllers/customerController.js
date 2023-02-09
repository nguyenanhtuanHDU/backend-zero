const Customer = require("../models/Customer");
const aqp = require("api-query-params");

const {
  createCustomerService,
  createCustomersListService,
  getAllCustomersService,
  updateCustomerService,
  deleteCustomerService,
  deleteCustomerListService,
} = require("../services/customerService");
const { uploadSingleFile } = require("../services/fileUpload");

module.exports = {
  getAllCustomers: async (req, res) => {
    let customers;
    const { page, limit } = req.query;

    const { filter } = aqp(req.query);
    delete filter.page;
    console.log(">>> check query: ", filter);

    if (page && limit) {
      customers = await getAllCustomersService(page, limit, filter);
    } else {
      customers = await getAllCustomersService();
    }

    res.status(200).json({
      EC: 0,
      data: customers,
    });
  },
  postCreateCustomer: async (req, res) => {
    let imageUrl = "";
    const { name, address, phone, email, description } = req.body;

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).send("No files were uploaded.");
    } else {
      const image = await uploadSingleFile(req.files.image);
      imageUrl = image.path;
    }

    const customerData = {
      name,
      address,
      phone,
      email,
      description,
      image: imageUrl,
    };

    const customer = await createCustomerService(customerData);

    res.status(200).json({
      EC: 0,
      data: customer,
    });
  },
  postCreateCustomersList: async (req, res) => {
    const customersData = req.body.customers;

    // await customers.map((customer) => {
    //   createCustomerService(customer);
    // });

    const customers = await createCustomersListService(customersData);
    if (customers) {
      res.status(200).json({
        EC: 0,
        data: customers,
      });
    } else {
      res.status(200).json({
        EC: 1,
        data: null,
      });
    }
  },
  putUpdateCustomer: async (req, res) => {
    const { id, name, address, phone } = req.body;
    const customer = await updateCustomerService(id, name, address, phone);
    res.status(200).json({
      EC: 0,
      data: customer,
    });
  },
  deleteCustomer: async (req, res) => {
    const id = req.body.id;
    const customer = await deleteCustomerService(id);
    res.status(200).json({
      EC: 0,
      data: customer,
    });
  },
  deleteCustomerList: async (req, res) => {
    const results = req.body.customers;

    const customersDeleted = await deleteCustomerListService(results);

    res.status(200).json({
      EC: 0,
      data: customersDeleted,
    });
  },
};
