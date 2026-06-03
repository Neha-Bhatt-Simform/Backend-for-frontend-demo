const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/users/1", (req, res) => {
  res.json({
    id: 1,
    name: "Neha",
    email: "neha@test.com",
  });
});

app.listen(5001, () => {
  console.log("User Service running on 5001");
});