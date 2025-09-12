

const GeneroDAO = require("../DAO/generoDAO")

class generoController{

    static async _metodoGeneric(request, response, metodo){

        //Recibiendo los parametros 

        const {id}= request.params || {}

        try{

            const respuesta = await metodo(id)

            //El servidor responde a la peticion en formqato json
            console.log(respuesta)
            response.status(200).json(respuesta)

        }catch(error){


            response.status(500).send("No se pudeo realizar la consulta:"+ error)
        }
    }

    //Metodo de la clase 

    static async getALL(request, response){

        return await generoController._metodoGeneric(request, response, GeneroDAO.getALL)


    }

    static async getBYID(request, response){

        return await generoController._metodoGeneric(request, response, GeneroDAO.getBYID)
    }


}

module.exports = generoController