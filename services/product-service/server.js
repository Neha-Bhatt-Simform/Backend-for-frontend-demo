const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Laptop",
      price: 70000,
    },
    {
      id: 2,
      name: "Phone",
      price: 30000,
    },
  ]);
});

app.listen(5002, () => {
  console.log("Product Service running on 5002");
});