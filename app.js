const express = require("express");
const { getPosts } = require("./routes/post");
const postRoutes = require("./routes/post");

const app = express();

app.get("/", getPosts);
// app.get("/", postRoutes.getPosts);

const port = 8080;

app.listen(port, () => {
  console.log(`"A node JS API on port: " ${port}`);
});
