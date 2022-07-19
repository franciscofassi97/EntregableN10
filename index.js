require("dotenv").config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;



//Inicio servidor le paso app para sockets
const { Server: HttpServer } = require('http');
const httpServer = new HttpServer(app);

//Middleware
app.use(express.static("public"));

//Incio sockets
const io = require('./sockets');
io(httpServer);


//Configuracion de handlebars
const { engine } = require('express-handlebars');

app.engine(
    "hbs",
    engine({
        extname: "hbs",
        defaultLayout: "main",
        layoutsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials"
    })
);

app.set("view engine", "hbs");
app.set("views", "./views");



app.get("/", (req, res) => {
    res.redirect("/api/productos");
});

app.get("/api/productos", (req, res) => {
    res.render("formProducts");
});

httpServer.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


