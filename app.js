const express = require("express");
const app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
const { getPosts } = require("./routes/post");

const myMiddleware = (req, res, next) => {
  console.log("middleware Applied");
  next();
};

app.use(morgan("dev"));
app.use(myMiddleware);

app.get("/", getPosts);

const port = 8080;

app.listen(port, () => {
  console.log(`"A node JS API on port: " ${port}`);
});
