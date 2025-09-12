
const Genero = require('../models/genero')
const conexionX = require("../db/conexion")

class generoDAO{


static async _get(query, params, operacion = "consulta"){

const queryX = query
//Si los parametros viene vacios se crea un arreglo vacio
const paramsX = params || []    

const [rows] = await conexionX.conexion.query(queryX, paramsX)

if(rows[0].length == 0){

    return {"mensaje":"No se pudo realizar su operacion"}

}else if(operacion == "consulta"){

    return rows[0].map(row=>{return new Genero(row.id, row.nombre)})
}else {

    return {"mensaje":"Operacion realizada con exito"}
}

}

//Metodo para consultar todos los generos 

static async getALL(param = null){

    const query = "CALL filtro_genero();"
    
    return await generoDAO._get(query, [])


}

static async getBYID(id){

    const query = "CALL filtro_generoBYID(?);"

    return await generoDAO._get(query, [id])
}

}

module.exports = generoDAO