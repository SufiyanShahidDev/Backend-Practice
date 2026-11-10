const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url == "/user") {
    res.end("This is a user page");
  } else if (req.url == "/users") {
    res.end("all users fetched successfully");
  } else {
    res.end("Hello Users");
  }

});

server.listen(5500, "127.0.0.1", () => {
  console.log("server is listening on port 5500");
});
