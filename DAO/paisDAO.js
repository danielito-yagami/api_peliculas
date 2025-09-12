
const pais = require("../models/pais")
const conexionX = require("../db/conexion")

//Creando el DAO con DRY para no escribir tanto codigo 


class paisDao {

//Metodo generico para las consultas, inserciones, actualizaciones y eliminaciones
static async _get(query,params, operacion = "consulta"){

const queryX = query
const paramsX = params || [] 

const [rows] = await conexionX.conexion.query(queryX, paramsX)

//Ahora si el sp regresa un valor en el caso de  UPDATE, INSERT y DELETE, no regresa nada
//Pero con Select si regresa valor 

if(rows[0].length == 0){

    return {"mensaje":"La operacion no se puedo completar"}
}else if(operacion == "consulta"){ 


    //mapeando los datos 

    return rows[0].map(row=> new pais(row.id, row.nombre))
}else {

    return {"mensaje":"Operacion realizada con exito"}
}


}

//Metodo GET ALL
//Uso parametro nulo para tener un codido mas limpio
static async getALL(param= null){

    const query = "CALL filtro_pais();"

    return await paisDao._get(query,[])

}

static async getByID(id){

    const query = "CALL filtro_paisBYID(?)"

    return await paisDao._get(query,[id])


}

}



module.exports = paisDao