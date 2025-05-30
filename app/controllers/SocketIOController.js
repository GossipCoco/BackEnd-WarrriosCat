const SocketIO = require("socket.io");

let io;
const message = "Bienvenue sur l'application Warriors Cats le jeu";
const SocketIOController = (server, options) => {
    io = SocketIO(server, options);
    io.on("connection", (socket) => {
        console.log('first connection : ', socket.id);
        const usr = 'gossipCoco';  // On simule ici l'utilisateur connecté
        
        // Envoie du message de bienvenue
        socket.emit('sendMessage', { userName: usr, message:message });
        socket.on("newMessage", (msg) => {
            console.log("Message reçu du client:", msg);
            // Diffuser à tous sauf l’expéditeur
            socket.broadcast.emit("receiveMessage", msg);
        });
        // Lors de la déconnexion
        socket.on('disconnect', () => {
            console.log(`${usr} s'est déconnecté`);
        });
    });
}

module.exports = SocketIOController;