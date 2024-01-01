const express = require('express')
const router = express.Router()
const viewController = require("../controllers/views.controllers");

//RUTAS DE VISTAS
router.get(["/", "/home"], viewController.viewHome);
router.get("/users", viewController.viewUsers);
router.get("/bootcamps", viewController.viewBootcamps);
router.get("/matriculas", viewController.viewMatriculas);

module.exports = router;

