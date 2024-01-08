const express = require("express");
const app = express();

app.use("/", express.static("public/dist/tic-tac-toe"));

app.listen(10000);
