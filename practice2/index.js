// File을 읽어오기 위한 file system module load
const fs = require('fs');

// 비동기 방식으로 file read
fs.readFile('./data.txt', 'utf8', function(err, data) {
    console.log('Async readFile: ' + data);
});

// 동기적으로 file read
const data = fs.readFileSync('./data.txt', 'utf8');

console.log('Sync readFile:' +  data);