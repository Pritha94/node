const fs = require('fs');
fs.writeFileSync('read.text', "hi i am Pritha");
// fs.writeFileSync('read.text', "I love adventure. ");

fs.appendFileSync('read.text', "I love adventure.");

const bufData = fs.readFileSync('read.text');
const orgData = bufData.toString();
console.log(orgData);

fs.renameSync('read.text', 'readwrite.text');

fs.unlinkSync('readwrite.text');