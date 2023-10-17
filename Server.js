const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Gabriel First Hello Node!!!!</h1>\n");
});

// Listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
