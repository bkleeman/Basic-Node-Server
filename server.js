var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

// var port = 3000;
var port = process.env.PORT || 80
// var host = "0.0.0.0";

app.listen(port, function () {
  console.log('Listening on port ' + port)
  console.log(`App running at http://localhost:${port}/`)
})