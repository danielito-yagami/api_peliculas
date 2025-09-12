
const express = require("express")

const router = express.Router()

const generoController = require("../controllers/generoController")

//Generando las rutas 

const rutaBase = "/"

router.get(rutaBase, generoController.getALL)

router.get(rutaBase+":id", generoController.getBYID)

module.exports = router