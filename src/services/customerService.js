const Customer = require("../models/Customer");

module.exports = {
  getAllCustomersService: async () => {
    try {
      const data = Customer.find();
      return data;
    } catch (error) {
      console.log(">>> err: ", error);
      return null;
    }
  },
  createCustomerService: async (customerData) => {
    try {
      const customer = await Customer.create({
        name: customerData.name,
        address: customerData.address,
        phone: customerData.phone,
        email: customerData.email,
        image: customerData.image,
        description: customerData.description,
      });
      return customer;
    } catch (error) {
      return null;
    }
  },
  createCustomersListService: async (customersData) => {
    try {
      const customers = await Customer.create(customersData);
      return customers;
    } catch (error) {
      console.log(">>> err: ", error);
      return null;
    }
  },
  updateCustomerService: async (id, name, address, phone) => {
    try {
      const customer = await Customer.updateOne(
        { _id: id },
        { name, address, phone }
      );
      return customer;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  deleteCustomerService: async (id) => {
    try {
      const customer = await Customer.deleteById({ _id: id }); // mongoose-delete method
      return customer;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
