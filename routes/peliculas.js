
//Rutas de la aPI en peliculas 

const express = require("express")
//Para manejar las rutas
const router = express.Router()

const peliculaController = require("../controllers/peliculas")


const rutaBase = "/"

//Todas las peliculas ruta + controlador

router.get(rutaBase,peliculaController.getALL)
//La pelicula por ID
router.get(rutaBase+":id",peliculaController.getBYID)
//Pellculas por filtro
router.post(rutaBase+"filtro",peliculaController.getBYFILTER)

//Por pelicula

module.exports = router