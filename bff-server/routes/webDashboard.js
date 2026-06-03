const express = require("express");

const router = express.Router();

const {
  getUser,
} = require("../services/userService");

const {
  getProducts,
} = require("../services/productService");

const {
  getOrders,
} = require("../services/orderService");

router.get("/", async (req, res) => {
  const results = await Promise.allSettled([
    getUser(),
    getProducts(),
    getOrders(),
  ]);

  const [
    userResult,
    productResult,
    orderResult,
  ] = results;

  res.json({
    user:
      userResult.status === "fulfilled"
        ? userResult.value
        : null,

    products:
      productResult.status === "fulfilled"
        ? productResult.value
        : [],

    orders:
      orderResult.status === "fulfilled"
        ? orderResult.value
        : [],

 
  });
});

module.exports = router;   // serviceStatus: {
    //   user:
    //     userResult.status === "fulfilled"
    //       ? "UP"
    //       : "DOWN",

    //   products:
    //     productResult.status === "fulfilled"
    //       ? "UP"
    //       : "DOWN",

    //   orders:
    //     orderResult.status === "fulfilled"
    //       ? "UP"
    //       : "DOWN",
    // },