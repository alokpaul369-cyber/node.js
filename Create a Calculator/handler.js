const { request } = require("node:http");
const { sumRequestHandler } = require("./sum");
const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
            <head><title>Calculator</title></head>
            <body>
            <h1>Welcome to the Calculator</h1>
            <a href="/calculate">Go to Calculator</a>
            </body>
            </html>`);
    return res.end();
  } else if (req.url.toLowerCase() === "/calculate") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<html>
                 <head><title>Calculator</title></head>
            <body>
            <h1>Hare is the Calculator</h1>
            <form action="/calculate-result" method="POST">
            <input type="text" placeholder="First number" name="first"/>
            <input type="text" placeholder="Second number" name="second"/>
            <input type="submit" value="Sum">
            </form>
            </body>
            </html>
            `);
    return res.end();
  } else if (
    req.url.toLowerCase() === "/calculate-result" &&
    req.method === "POST"
  ) {
    return sumRequestHandler(req, res);
  }
};
exports.requestHandler = requestHandler;
