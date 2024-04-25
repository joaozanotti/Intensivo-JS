const chat = document.getElementById('mensagens');
const btEnviar = document.getElementById('enviar');
const elementoTexto = document.getElementById('texto');
const socket = io();

socket.addEventListener('nova mensagem', (msg) => {
    const mensagem = document.createElement('li');
    mensagem.textContent = msg;
    mensagem.classList.add('mensagem');
    chat.appendChild(mensagem);
})

btEnviar.addEventListener('click', () => {
    const mensagem = elementoTexto.value;
    socket.emit('nova mensagem', mensagem);
    elementoTexto.value = '';
})