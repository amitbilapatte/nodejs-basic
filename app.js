const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
const postRoutes = require("./routes/post");

const myMiddleware = (req, res, next) => {
  console.log("middleware Applied");
  next();
};

app.use(morgan("dev"));
app.use(myMiddleware);

app.use("/", postRoutes);

const port = 8080;

app.listen(port, () => {
  console.log(`"A node JS API on port: " ${port}`);
});
