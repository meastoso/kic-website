var express = require('express');
var app = express();


/*app.get('/', function (req, res) {
  res.send('Hello World!');
});*/

app.use(express.static('content'))


var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
    console.log('Server running at http://127.0.0.1:' + port + '/');
});
