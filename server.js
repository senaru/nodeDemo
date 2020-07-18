var express = require('express')
var bp = require('body-parser')
var app = express()

app.use(express.static(__dirname))
app.use(bp.json())

var messages = [
    { name: "Tim", message: "Hi" },
    { name: "Owin", message: "Hello!" }
]

app.get('/messages', (req, res) => {
    res.send(messages)
})

app.post('/messages', (req, res) => {
    messages.push(req.body)
    console.log(req.body);
    res.sendStatus(200);
})

const server = app.listen(3000, () => {
    console.log("server is listening on port", server.address().port);
})