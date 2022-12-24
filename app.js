/*
 *
 *   This is the main web server
 *   it is responsible for running all css and html
 *
 */

const { Console } = require("console");
const fs = require("fs");
const http = require("http");
const port = 8082;

const server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  fs.readFile("index.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("error: file not found");
      app.use(express.static(path.join(__dirname, "/Web-Server")));
    } else {
      res.write(data);
    }
    res.end();
  });
});

server.listen(port, function (error) {
  if (error) {
    console.log("something went wrong: " + error);
  } else {
    console.log("Server is listening on port: " + port);
  }
});

console.log("Hello From Node");
