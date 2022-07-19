const definirContenedor = require('../daos');

module.exports = (server) => {
    const { Server: IoServer } = require("socket.io");
    const ioSocket = new IoServer(server);

    ioSocket.on("connection", async (socket) => {
        console.log("New cliente connected");

        const contenedorProductos = await definirContenedor("productos");
        const contenedorMensajes = await definirContenedor("mensajes");

        // const mensajesNormalizado = normalizr.normalize(await contenedorMensajes.getAllData(), [mensajesSchema]);


        socket.emit("leerProductos", await contenedorProductos.getAllData());

        // socket.emit("leerMensajes", mensajesNormalizado);


        //Prodcutos 
        socket.on("agregarProducto", async (producto) => {
            const idProducto = await contenedorProductos.save(producto);
            console.log(idProducto)
            if (idProducto) ioSocket.sockets.emit("leerProductos", await contenedorProductos.getAllData());
        })

        //Chat
        socket.on("agregarMensaje", async (mensaje) => {
            const idMensaje = await contenedorMensajes.save(mensaje);
            // const mensajesNormalizado = normalizr.normalize(await contenedorMensajes.getAllData(), [mensajesSchema]);

            if (idMensaje) ioSocket.sockets.emit("leerMensajes", mensajesNormalizado);

        })
    })
};