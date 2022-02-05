const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hi lilo");

    res.end();
  }
  if (req.url === "/group/wjsn") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

// server.on("connection", (socket) => {
//   console.log("new connection");
// });

server.listen(3000);

console.log("I'm hearing your voice from 3000...");
