const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/orders/1", (req, res) => {
  res.json([
    {
      id: 101,
      amount: 50000,
      status: "Delivered",
    },
    {
      id: 102,
      amount: 40000,
      status: "Pending",
    },
  ]);
});

app.listen(5003, () => {
  console.log("Order Service running on 5003");
});