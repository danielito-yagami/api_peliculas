

const idiomaDAO = require("../DAO/idiomaDAO")


class idiomaController{

//Metodo Generico 

static async _metodoGenerico(request, response, metodo){

    //Parametros de la url 

    const {id} = request.params || {}

    try{

        const res = await metodo(id)

        //La respuesta se vuelve json 

        response.status(200).json(res)


    }catch(error){

        response.status(500).send("No se pudo realizar la operacion :"+error)
    }


}

static async getALL(request,response){

    return await idiomaController._metodoGenerico(request, response, idiomaDAO.getALL)


}

static async getBYID(request, response){

    return await idiomaController._metodoGenerico(request, response, idiomaDAO.getBYID)
}


}

module.exports = idiomaController