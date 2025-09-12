//Solo se necesita el DAO 


const peliculasDAO = require("../DAO/peliculasDAO")

//Creando una clase con metodos estaticos y asincronos sin constructor


class peliculaController {


//Metodo getALL

static async getALL(request, response){


    try {

        const respuesta = await peliculasDAO.getALL()

        response.status(200).json(respuesta)



    }catch(error){


        response.status(500).send("Error al consultar")
    }


}
//Por id 
static async getBYID(request, response){

const id = request.params.id

try {

const respuesta = await peliculasDAO.getByID(id)

return response.status(200).json(respuesta)

}catch(error){

    response.status(500).send("No se pudo encontrar el recurso")
}


}

//Por filtros 

static async getBYFILTER(request, response){

const datos = request.body

const {titulo,pais, idioma, genero } = datos

//console.log("parametros: "+titulo,pais, idioma, genero )

try{

    const result = await peliculasDAO.getBYFILTER(titulo,pais, idioma, genero)

    return response.status(200).json(result)

}catch(error){


response.status(500).send("No se pudo encontrar el recurso "+error)

}

}


}

module.exports = peliculaController