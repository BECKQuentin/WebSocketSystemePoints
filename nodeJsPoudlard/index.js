const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// Definition du dossier public statique
app.use(express.static(__dirname + '/public'));




app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/points', (req, res) => {
    res.sendFile(__dirname + '/points.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (jsonPoints) => {
        io.emit('chat message', jsonPoints);
    });
});

io.emit('some event', { someProperty: 'some value', otherProperty: 'other value' }); // This will emit the event to all connected sockets

server.listen(3000, () => {
    console.log('listening on *:3000');
});








