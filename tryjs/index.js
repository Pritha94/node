const fs = require('fs');
// const chalk = require('chalk');
const cv = {
    name: "Pritha",
    home: "Howrah",
};
console.log(cv); // object data
const valuData = JSON.stringify(cv); // stringify convert object data to string data
console.log(valuData); //strinng data
const objectData = JSON.parse(valuData); //convert sting data to object data.
console.log(objectData); //object data