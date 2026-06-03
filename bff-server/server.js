const express = require("express");
const cors = require("cors");

const dashboardRoute = require(
  "./routes/webDashboard"
);
const mobileDashboardRoute =
  require("./routes/mobileDashboard");

const app = express();

app.use(cors());

app.use("/api/web/dashboard", dashboardRoute);
app.use(
  "/api/mobile/dashboard",
  mobileDashboardRoute
);

app.listen(5000, () => {
  console.log("BFF running on 5000");
});