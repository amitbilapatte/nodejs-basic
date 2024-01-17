// console.log("Process", process);
// const helpers = require("./helpers");
const { sum } = require("./helpers"); //object destructuring

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World from nodeJS Updates");
});

server.listen(3000);

// const total = sum(10, 200);

const total = sum(10, 200);
console.log("Total: " + total);
