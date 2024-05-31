const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = dirPath+'\\apple.txt';

//console.log(filePath);

const filePath1 = `${dirPath}\\apple.txt`;

//console.log(filePath1);

//fs.writeFileSync(filePath1, '\nThis is the file for before crud.');

//fs.appendFileSync(filePath1, '/nThis is the file for after crud.');

//console.log(fs.readFileSync(filePath1,"utf8"));

// fs.readFile(filePath1,'utf8',(err, item)=>{
//     console.log(item);
// })

// fs.appendFile(filePath1,'Pyar ho je ga pagal',(err)=>{
//     if(!err) console.log("Ho gi updated bappu.")
// });

// fs.rename(filePath1, `${dirPath}\\banana.txt`,(err)=>{
//     if(!err) console.log("Rename bi kr dala bappu.")
// })

fs.unlinkSync(`${dirPath}\\banana.txt`);