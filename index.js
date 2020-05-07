const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8081 })

var connected = [];

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log("message");
        wss.clients.forEach((client) => {
            client.send(message);
        })
});


});