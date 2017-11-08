var express = require('express');
var app = express();
var morgan = require('morgan');

var users = [
    {id: 1, name: 'alice'},
    {id: 2, name: 'bek'},
    {id: 3, name: 'chris'}
];

app.use(morgan('dev'));

app.get('/users', function(req, res) {
    req.query.limit = req.query.limit || 10;
    // query로 들어오는 값은 문자이므로 정수형으로 반환 필요
    const limit = parseInt(req.query.limit, 10);

    // 만약 숫자가 아닌경우
    if(Number.isNaN(limit)) {
        return res.status(400).end();
    }

    res.json(users.slice(0, limit));
});

app.post('/users', function(req, res) {

});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});

module.exports = app;