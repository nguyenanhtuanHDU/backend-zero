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
};
