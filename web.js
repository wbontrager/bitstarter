var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var fs = require('fs');
//  var buffer = new Buffer();
  response.send(fs.readFileSync("index.html").toString());
//  response.send(buff2.toString('utc-8', fs.readFileSync("index.html")));
//  response.send("Hello World from index.html");
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
