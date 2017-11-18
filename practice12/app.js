var express = require('express');
var app = express();

app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
app.get('/template', function(req, res) {
    res.render('temp', {time: Date(), _title:'Jade'});
});
app.get('/', function(req, res) {
    res.send('Hello home page');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});