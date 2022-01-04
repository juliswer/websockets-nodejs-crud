const socket = io();

socket.on('ping', () => {
    console.log('escuchado');
})