var express = require("express");
var path = require("path");
var serveStatic = require("serve-static");
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

app.listen(port);
console.log("server started " + port);
