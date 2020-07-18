var express = require('express')
var bp = require('body-parser')
var app = express()
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.use(express.static(__dirname))
app.use(bp.json())
app.use(bp.urlencoded({ extended: false }))

var messages = [
    { name: "Tim", message: "Hi" },
    { name: "Owin", message: "Hello!" }
]

app.get('/messages', (req, res) => {
    res.send(messages)
})

app.post('/messages', (req, res) => {
    messages.push(req.body)
    io.emit('message', req.body)
    res.sendStatus(200);
})

io.on('connection', (s) => {
    console.log('a user connected')
})

const server = http.listen(3000, () => {
    console.log("server is listening on port", server.address().port);
})