var express = require('express');
var app = express();

app.use(express.static('Business_Website'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});