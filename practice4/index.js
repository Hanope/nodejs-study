const express = require('express');
const morgan = require('morgan');
const app = express();

// 미들웨어 정의
// 미들웨어는 항상 매개변수 req, res, next를 가진다.
function logger(req, res, next) {
    console.log('I am looger');
    // 항상 next()를 호출해야 함.
    next();
}

function logger2(req, res, next) {
    console.log('I am logger2');
    next();
}

function commonmw(req, res, next) {
    console.log('commondmw');
    next(new Error('eror occured'));
}

// 에러 미들웨어
function errormw(err, req, res, next) {
    // 에러를 처리하거나 다음 미들웨어에게 넘김
    console.log(err.message);
    next();
}

// 미들웨어 사용
app.use(logger);
app.use(logger2);

app.use(commonmw);
app.use(errormw);

// 서드파티 미들웨어 사용
app.use(morgan('dev'));

// 어플리케이션
app.listen(3000, function() {
    console.log('Server is running');
});