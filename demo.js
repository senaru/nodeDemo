var _ = require('lodash');
var fs = require('fs');
var data = require('./data.json');

console.log(data)

fs.readFile('./data.json', 'UTF-8', (err, data) => {
    console.log(JSON.parse(data).name)
})

console.log(_.random(1, 100));