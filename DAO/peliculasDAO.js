//Recuerda en el DAO se usa el modelo y la conexion 


const Pelicula = require("../models/peliculas")
const conexionX = require("../db/conexion")

//Creao una clase para los DAOS con metodos staticos y asincronos 


class PeliculaDAO {

//Creando los metodos basicos de las peliculas 

static async getALL(){


    const query = "CALL getPeliculas();"

    const [rows] = await conexionX.conexion.query(query)

    return rows[0].map(row=> new Pelicula(row.id, row.titulo, row.sinopsis, row.estreno, row.pais, row.idioma, row.genero, row.imagen, row.video))

    

}

static async getByID(id){

    const query = "CALL getPeliculasBYID("+id+");"

    const [rows] = await conexionX.conexion.query(query)

    //Para validar que regreso el resultado 

    const row = rows[0][0]

    if(rows[0].length == 0){

        return {"mensaje":"No existe la pelicula"}


    }else {

        return new Pelicula(row.id, row.titulo, row.sinopsis,row.estreno, row.pais, row.idioma, row.genero, row.imagen, row.video )
    }
}

//Metodo de filtros por categorias diferentes 

static async getBYFILTER(titulo, pais, idioma, genero ){


    const query = "CALL getPeliculasBYFILTER(?,?,?,?);"

    const [rows] = await conexionX.conexion.query(query,[titulo, pais, idioma, genero])

     if(rows[0].length == 0){

        return {"mensaje":"No existe alguna pelicula con estos filtros"}


    }else {

        return rows[0].map(row=>new Pelicula(row.id, row.titulo, row.sinopsis, row.estreno, row.pais, row.idioma, row.genero, row.imagen, row.video))
    }

}


}


module.exports = PeliculaDAO