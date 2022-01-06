const socket = io();

const saveNote = (title, description) => {
    socket.emit('client:newnote', {
        title,
        description
    });
}

socket.on("server:newnote", noteUI);

socket.on('server:loadnotes', renderNotes);