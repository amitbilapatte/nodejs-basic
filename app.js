const fs = require("fs");
const fileName = "target.txt";

const errHanlder = (err) => console.log(err);

const dataHanlder = (data) => console.log(data.toString());
fs.readFile(fileName, (err, data) => {
  if (err) errHanlder(err);
  dataHanlder(data);
});
console.log("node js async programming");
