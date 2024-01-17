const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("JAI SHREE RAM");
});

app.listen(3000);
