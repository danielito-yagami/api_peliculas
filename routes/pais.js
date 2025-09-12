

const express = require("express")

const router = express.Router()

const paisController = require("../controllers/paisController")

const rutaBase = "/"

//Rutas para crear los endpoints de los paises

router.get(rutaBase, paisController.getALL)

router.get(rutaBase+":id", paisController.getBYID)

module.exports = router