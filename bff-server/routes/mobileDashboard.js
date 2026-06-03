const express = require("express");

const router = express.Router();

const {
  getUser,
} = require("../services/userService");

const {
  getOrders,
} = require("../services/orderService");

router.get("/", async (req, res) => {
  const [user, orders] =
    await Promise.all([
      getUser(),
      getOrders(),
    ]);

  res.json({
    userName: user.name,

    recentOrder: orders[0],
  });
});

module.exports = router;