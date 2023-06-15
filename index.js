const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'CRUD');
const file = `${dirPath}/hello.txt`;

//Creating a file

// fs.writeFileSync(file, 'Hey my name is Tanuj')

//Reading a file

// fs.readFile(file, 'utf8', (err, item) => {
//     console.log(item);
// })

//Updating the content of an existing file

// fs.appendFile(file, "I'm 6'2", err => {
//     if (!err) console.log('file is updated');
//     else console.log(err);
// })

//Renamig a file

// fs.rename(file, `${dirPath}/hey.txt`, err => {
//     if (!err) console.log('file name is updated');
//     else console.log(err);
// })

// Deleting a file

// fs.unlinkSync(`${dirPath}/hey.txt`)

