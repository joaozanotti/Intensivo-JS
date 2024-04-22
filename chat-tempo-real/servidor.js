const http = require('http');
const express = require('express');
const app = express();

const funcionalidadesIo = require('socket.io');
const servidorHttp = http.createServer(app);
const io = funcionalidadesIo(servidorHttp);

function comportamentoSocket(socket) {
    console.log('Novo usuário na sala.');
    socket.addListener('nova mensagem', (msg) => {
        io.emit('nova mensagem', msg);
    });
}

io.addListener('connection', comportamentoSocket);

app.use(express.static('public'));

servidorHttp.listen(3000);