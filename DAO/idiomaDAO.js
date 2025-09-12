
//Modelo 
const Idioma = require("../models/idioma")

const conexionX = require("../db/conexion")


//Creando el DAO con DRY para no escribir tanto codigo

class idiomaDAO{

//Creando el metodo generico 

static async _get(query, params, operacion = "consulta"){

    const queryX = query
    //Si los parametros viene vacios se crea un arreglo vacio
    const paramsX = params || []

    const [rows] = await conexionX.conexion.query(queryX, paramsX)

    if(rows[0].length == 0){

        return {"mensaje":"No se pudo realizar su operacion"}
    }
    else if(operacion == "consulta"){

        return rows[0].map(row=> new Idioma(row.id, row.nombre, row.codigo))
    }else {

        return {"mensaje":"Operacion realizada con exito"}
    }
}

static async getALL(param = null){

const query = "CALL filtro_idioma();"

return await idiomaDAO._get(query,[])

}

static async getBYID(id){


const query = "CALL filtro_idiomaBYID(?);"

return await idiomaDAO._get(query, [id])


}

}

module.exports = idiomaDAO