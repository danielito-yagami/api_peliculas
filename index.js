//APi de peliculas para REACT 

const express = require('express')
const app = express()

//cargando variavles de entorno 

require('dotenv').config()

//PAra pruebas importando la conexion

const conexion = require("./db/conexion")
//importando el modulo de cors
const cors = require("cors")
//definiendo puerto 

const puerto = process.env.PORT || 8342
const ruta = "/"

const ip = "::"

app.use(express.json())
//Para permitir peticiones desde otras url 
app.use(cors())

//defininedo las rutas de la api 
const moviesRutas = require("./routes/peliculas")
const paisRutas = require("./routes/pais")
const idiomaRutas = require("./routes/idioma")
const generoRutas = require("./routes/genero")
//Usando las rutas de los diferentes modelos 
app.use("/api/peliculas",moviesRutas)
app.use("/api/pais",paisRutas)
app.use("/api/idioma", idiomaRutas)
app.use("/api/genero",generoRutas)

app.get(ruta, async(request, response)=>{

    //Aqui usamos la logica del DAOS

    try{

        const resultado = await conexion.testConnection()

        if(resultado){

            response.status(200).send("Conectado a MYSQL")
        }else {

            response.status(500).send("Sin conexion a MYSQL")
        }

    }catch(error){


        response.status(500).send("Error en la conexion")
    }

})

app.get('/health', (request, response)=>{

    response.sendStatus(200)
})

app.listen(puerto, ()=>{


console.log("Iniciando servicio con node js api peliculas en el puerto :"+puerto)

})