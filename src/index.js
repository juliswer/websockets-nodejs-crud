import express from 'express';
import {Server as WebSocketServer} from 'socket.io';
import http from 'http';
import {v4 as uuid} from 'uuid';

let notes = [];

const app = express();
const server = http.createServer(app);
const io = new WebSocketServer(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket) => {
    console.log('nueva conexion: ', socket.id);

    socket.emit('server:loadnotes', notes);

    socket.on('client:newnote', (newNote) => {
        const note = {...newNote, id: uuid()};
        console.log(note);
        notes.push(note);
        socket.emit('server:newnote', note);
    })

    socket.on('client:deletenote', (noteId) => {
        notes = notes.filter(note => note.id !== noteId);
        socket.emit('server:loadnotes', notes);
    })

    socket.on('client:updatenote', (noteId) => {
        console.log(noteId);
    })

    socket.on('client:getnote', (noteId) => {
        console.log(noteId);
    })
})

server.listen(3000)
console.log('Server is running on port', 3000);