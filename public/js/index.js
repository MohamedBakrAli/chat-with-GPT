const socket = io();

const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const messageList = document.getElementById('message-list');

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    socket.emit('chat_message', message);
    
    sendButton.disabled = true;
    messageInput.value = '';
    messageList.appendChild(createMessageElement(true, message));
});

socket.on('chat_message_resopnse', (message) => {
    messageList.appendChild(createMessageElement(false, message));
    sendButton.disabled = false;
});

socket.on('error', (message) => {
    alert(message);
    sendButton.disabled = false;
});

function createMessageElement(isSent, message) {
    const messageItem = document.createElement('li');
    const messageSpan= document.createElement('span');
   
    messageSpan.innerText = message;
   
    messageItem.appendChild(messageSpan);
    messageItem.classList.add(isSent ? 'sentMessage' : 'recivedMessage');
   
    return messageItem;
}