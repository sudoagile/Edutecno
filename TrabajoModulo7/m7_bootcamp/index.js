const app = require("./app/server.js") 
const sequelize = require("./app/database/config.js");

const main = async () => {
    console.log("Iniciando proyecto");
    await sequelize.sync();
    app.listen(3000, ()=> console.log("escuchando en http://localhost:3000") )
}

main();