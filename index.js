const express = require("express");
const app = express();
require("./cron/cronJob");

app.use("/", express.static("public/dist/tic-tac-toe"));

app.listen(10000);
