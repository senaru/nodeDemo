var _ = require('lodash');
var fs = require('fs');
var data = require('./data.json');

console.log(data.name)

fs.readFile('./data.json', 'UTF-8', (err, data) => {
    console.log(data)
})

fs.readdir('c:/', (err, data) => {
    console.log(data)
})

console.log(_.random(1, 100));