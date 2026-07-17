const fs = require('fs');
const userRequestHandlar = (req, res) => {
  console.log(req.url, req.method, req.headers);
  if (req.url === '/'){
  res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <title>Form</title>
</head>
<body>
    <h1>Welcome to home Page</h1>
    <form action="/submit-details" method="POST">
    <input type="text" id="name" name="name" placeholder="Enter your name"<br><br>
    <lebel for="gender">Gender:</lebel>
    <input type="radio" id="male" name="gender" value="male">
    <lebel for="male">Male</lebel>
    <input type="radio" id="female" name="gender" value="female">
    <lebel for="female">Female</lebel><br><br>
    <button type="submit">Submit</button>
    </form>
</body>
</html>`);
return res.end();
// redirecting to the home page after form submission

}else if(req.method == 'POST' && req.url.toLowerCase() === '/submit-details'){
    //Reading Chunks of data from the request body
    const body = [];
    req.on('data',(chunk) =>{
      console.log(chunk);
      body.push(chunk);
    });
    // Parsing the request body after all data has been received(Buffering the chunks)
    
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const params = new URLSearchParams(parsedBody);
      const jsonObject = {};
      for (const [key, value] of params.entries()) {
        jsonObject[key] = value;
      }
      const jsonString = JSON.stringify(jsonObject);
      console.log(jsonString);
      fs.writeFileSync('user-details.txt', jsonString);
    });
}
 fs.writeFileSync('user-details.txt', 'Alok Paul');
  res.statusCode = 302;
  res.setHeader('Location', '/');
  return res.end();
}
module.exports = userRequestHandlar;