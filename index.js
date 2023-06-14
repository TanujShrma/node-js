const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname, 'files')
console.log(dirPath);

// for (let i = 0; i < 5; i++) {
//     // fs.writeFileSync("hello"+i+".txt", "a simple text file number : "+ i)
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`, `a simple text file number : ${i}`)
// }

fs.readdir(dirPath, (err, files) => {
    files.forEach(item => { console.log(item); })
})

