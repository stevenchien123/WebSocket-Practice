import { Server } from "ws";

const server = new Server({ port: 8080 });

server.on('open', function open() {
    console.log('connected');
});

server.on('close', function close() {
    console.log('disconnected');
});

server.on('connection', function connection(ws, req) {
    const ip = req.connection.remoteAddress;
    const port = req.connection.remotePort;
    const clientName = ip + port;

    console.log('%s is connected', clientName)

    ws.send("Welcome " + clientName);

    ws.on('message', function incoming(message) {
        console.log('received: %s from %s', message, clientName);

        server.clients.forEach(function each(client) {
            if (client.readyState === OPEN) {
                client.send(clientName + " -> " + message);
            }
        });

    });

});