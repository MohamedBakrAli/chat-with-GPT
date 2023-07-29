const socketio = require('socket.io');
const { getGPTReplay } = require('../controllers/GPTControllers');

module.exports = (server) => {
    const io = socketio(server);
    // set up a Socket.IO connection
    io.on('connection', (socket) => {
        console.log('A user has connected!');

        // handle incoming chat messages
        socket.on('chat_message', async (msg) => {
            console.log('Received message:', msg);
            try {
                // get the massage replay from GPT APIs
                //const msgReplay = await getGPTReplay(msg);
                //console.log('message replay:', msgReplay);

                // broadcast the response to all connected clients
                socket.emit('chat_message_resopnse', 'msgReplay');
            }
            catch (error) {
                console.error(error);
                socket.emit('error', error.message);
            }
        });

        // handle disconnections
        socket.on('disconnect', () => {
            console.log('A user has disconnected!');
        });
    });
}
