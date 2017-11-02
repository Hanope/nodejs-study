// Express Routing Hello World Example

var express = require('express');
var app = express();

app.get('/', function(req, res) {
    // Express Enginge에서 문자열 출력하는 기능
    res.send('Hello World!');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});