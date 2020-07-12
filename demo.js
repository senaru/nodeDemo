var _ = require('lodash');
var fs = require('fs');

//Rand
console.log(_.random(1, 100));

//Reading a json
var data = require('./data.json');
console.log(data.name)

//Read File
fs.readFile('./data.json', 'UTF-8', (err, data) => {
    console.log(data)
})

//Read Dir
fs.readdir('c:/', (err, data) => {
    console.log(data)
})

var data = {
    name: "bob"
}

//Writing to a file
fs.writeFile('data2.json', JSON.stringify(data), (err) => {
    if (err) console.log('error', err);
});