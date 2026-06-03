const axios = require("axios");

async function getOrders() {
  const response = await axios.get(
    "http://localhost:5003/orders/1"
  );

  return response.data;
}

module.exports = {
  getOrders,
};