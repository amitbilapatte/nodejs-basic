// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("JAI SHREE RAM");
// });

// app.listen(3000);

const fs = require("fs");
const fileName = "target.txt";

const data = fs.readFileSync(fileName);
console.log(data.toString());

// fs.watch(fileName, () => console.log("file changed"));
// fs.readFile(fileName, (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });
console.log("node js async programming");
