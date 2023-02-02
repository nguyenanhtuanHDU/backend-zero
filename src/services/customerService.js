const Customer = require("../models/Customer");

module.exports = {
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
        console.log('>>> err: ', error);
        return null
    }
  },
};
