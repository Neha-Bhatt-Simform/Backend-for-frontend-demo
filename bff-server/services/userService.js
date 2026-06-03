const axios = require("axios");

async function getUser() {
  const response = await axios.get(
    "http://localhost:5001/users/1"
  );

  return response.data;
}

module.exports = {
  getUser,
};