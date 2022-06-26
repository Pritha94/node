const fs = require('fs');

//JSON= javaScript Object Notation
const bioData = {
    name: "Wrijoo",
    age: 32.51,
    stream: "Ojanaa"
};
const log = console.log;
// log(bioData);
// //javascript object to string
// const jsonData = JSON.stringify(bioData);
// log(jsonData);
// //string to object
// const objData = JSON.parse(jsonData)
// log(objData);

const jsonData = JSON.stringify(bioData);
fs.writeFile("json1.json", jsonData, (err) => {
    log(`DONE`);
});

fs.readFile("json1.json", "UTF-8", (err, data) => {
    log(data);
    const orgData = JSON.parse(data);
    log(orgData);
})