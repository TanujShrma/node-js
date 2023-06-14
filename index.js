// const http = require('http');
// const data = require('./data')

// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application\json' });
//     res.write(JSON.stringify(data))
//     res.end()
// }).listen(4300);
// console.log("avksm");

// console.log(process.argv[2]);
const input = process.argv
const fs = require('fs');

if (input[2] == 'add') {
    fs.writeFileSync(input[3], input[4])
} else if (input[2] == 'remove') {
    fs.unlinkSync(input[3])
} else {
    console.log('invalid input');
}