var express = require("express");

var app     = express();

app.get("/", function(req, res){
  res.send("Helloo worldddd");
});

app.listen(3001, function(){
  console.log("it's aliiiiive!");
});
