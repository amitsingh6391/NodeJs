const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'files');

console.log(dirPath)

// fs.writeFileSync('show_file_list/apple.text', 'this is apple');

// for (i = 0; i < 5; i++) {
// console.log('this is for loop : i' + i);
//     fs.writeFileSync(dirPath + i + ".text", 'this is apple: ');

// }


fs.readdir(dirPath, (err, files) => {
    console.log('this is for loop : i' + files);
    files.forEach((item) => {
        console.log('this is file item :' + item)
    })
})