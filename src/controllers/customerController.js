const Customer = require("../models/Customer");
const { createCustomerService } = require("../services/customerService");
const { uploadSingleFile } = require("../services/fileUpload");

module.exports = {
  getAllCustomers: async (req, res) => {
    const customers = await Customer.find();
    res.status(200).json({
      EC: 0,
      data: customers,
    });
  },
  postCreateCustomer: async (req, res) => {
    let imageUrl = "";
    const { name, address, phone, email, description } = req.body;

    console.log(">>> check image: ", req.files);

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
};
