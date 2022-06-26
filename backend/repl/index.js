//create a new file
const fs = require('fs');

//creating a file
//fs.writeFileSync('read.txt', "Nothing is true");
// fs.writeFileSync('read.txt', "Everything is Permitted");

//apend the message in file
// fs.appendFileSync('read.txt', " Everything is permitted");

//read from file
// const bufData = fs.readFileSync('read.txt');
// const data = fs.readFileSync('read.txt', 'UTF-8');
// const orgData = bufData.toString();
// console.log(data);
// console.log(bufData);
// console.log(orgData);

// Node.js includes as additionaal data type called buffer
// which is not present in JavaScript
// buffer mainly store binary data
// while reading from a file or receiving packet over the internet.

//file rename
// fs.renameSync('read.txt', 'readwrite.doc');

//delete the file...
fs.unlinkSync('read.txt');