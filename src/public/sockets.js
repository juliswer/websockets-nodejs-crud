const socket = io();

const saveNote = (title, description) => {
    socket.emit('client:newnote', {
        title,
        description
    });
}

const deleteNote = (id) => {
    socket.emit('client:deletenote', id);
}

const getNote = (id) => {
    socket.emit('client:getnote', id);
}

const updateNote = (id) => {
    socket.emit('client:updatenote', id);
}

socket.on("server:newnote", appendNote);

socket.on('server:loadnotes', renderNotes);

socket.on('server:selectednote', data => {
    console.log(data);
})