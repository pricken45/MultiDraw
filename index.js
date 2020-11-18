const express = require('express')
const app = express()
const server = app.listen(3000, serverStarted)

function serverStarted(){
    console.log("Server listening on port 3000...")
}

app.use(express.static('public'))

const socket = require('socket.io')
const io = socket(server)

io.sockets.on('connection', newConnection)

function newConnection(socket){
    console.log(socket.id)

    socket.on('click', (data)=>{
        socket.broadcast.emit('click', data)
    })
}