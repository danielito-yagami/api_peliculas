

//generando las rutas 

const express = require("express")

//Crando el ruteador

const ruteador = express.Router()

//Trayendo los metodos del controlador de idioma

const idiomaControlador = require("../controllers/idiomaController")

const rutaBase = "/"

//Creando las rutas con los metodos get, post, put y delete

//Traer todos los datos
ruteador.get(rutaBase, idiomaControlador.getALL)


//Traer por id
ruteador.get(rutaBase+":id",idiomaControlador.getBYID)


module.exports = ruteador