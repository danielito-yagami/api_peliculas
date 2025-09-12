
//Importando el Dao de los paises 


const paisDAO = require("../DAO/paisDAO")
const peliculaController = require("./peliculas")

//Creando una clase para el controlador de paises


class paisController {


    //Metodo general para mandar los resultados a la ruta 

    static async _metodoGenerico(request, response, metodoDAO){

        const {id} = request.params || {}

        try{


            const respuesta = await metodoDAO(id)

            response.status(200).json(respuesta)

        }catch(error){

            response.status(500).send("No se pudo realizar la consulta :"+error)

        }
    }

    static async getALL(request, response){

        return await paisController._metodoGenerico(request, response, paisDAO.getALL)

    }

    static async getBYID(request, response){


        return await paisController._metodoGenerico(request, response, paisDAO.getByID)

    }
}

module.exports = paisController