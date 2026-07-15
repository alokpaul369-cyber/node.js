const http = require("http");
const { url } = require("inspector");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Shoping</title>
</head>
<body>
  <div>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/men">Men</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/kids">Kids</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
    </nav>
  </div>
</body>
</html>`);
  if (req.url === "/") {
    res.write(`<h1>Home</h1><br>
      <p>Welcome to the Home page</p>`);
  } else if (req.url === "/men") {
    res.write(`<h1>Men</h1><br>
      <p>Welcome to the Men page</p>`);
  } else if (req.url === "/women") {
    res.write(`<h1>Women</h1><br>
      <p>Welcome to the Women page</p>`);
  } else if (req.url === "/kids") {
    res.write(`<h1>Kids</h1><br>
      <p>Welcome to the kids page</p>`);
  } else if (req.url === "/cart") {
    res.write(`<h1>Cart</h1><br>
      <p>Welcome to the Cart</p>`);
  } else {
    res.write(`<p>404 error </p><br>
    <p>Invalid url.</p>`);
  }
});
server.listen(3002, () => {
  console.log("Server running at http://localhost:3002/");
});
