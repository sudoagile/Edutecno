const express = require("express");
const { create } = require("express-handlebars") ;
const path = require("path"); 
 
//importación de rutas
const viewRoutes = require("./routes/views.routes.js");

const app = express();

//MIDDLEWARES GENERALES
app.use(express.json());

//INICIO CONFIGURACION HANDLEBARS
const hbs = create({


	partialsDir: [
		
        path.resolve(__dirname, "./views/partials/")
	],
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set("views", path.resolve(__dirname, "./views"));

// FIN CONFIGURACION HANDLEBARS

//INCLUIR RUTAS A LA APP
app.use("/", viewRoutes);

module.exports = app;


