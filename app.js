
const express = require('express');
const http = require('http');
const MainRouters = require('./routes/MainRoutes');

require('dotenv').config();

// set up the app and server
const app = express();
const server = http.createServer(app);

// configure socketio
require('./socketio/SocketioSetup')(server);

// set template engine
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// routes
app.use(MainRouters);

// start the server
server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});