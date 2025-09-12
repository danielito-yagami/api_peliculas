//Creando el modelo de peliculas 


class Pelicula {


id 
titulo 
sinopsis 
estreno 
pais 
idioma
genero 
url_imagen 
url_trailer


constructor(id, titulo, sinopsis, estreno, pais, idioma, genero, imagen, video ){

this.id = id
this.titulo = titulo
this.sinopsis = sinopsis
this.estreno = estreno
this.pais = pais
this.idioma = idioma
this.genero = genero
this.imagen = imagen
this.video = video


}



}

module.exports = Pelicula