const axios = require("axios");

async function getProducts() {
  const response = await axios.get(
    "http://localhost:5002/products"
  );

  return response.data;
}

module.exports = {
  getProducts,
};