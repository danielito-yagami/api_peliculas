
//Recuerda en MYSQL debes instalar el paquete mysql2
//Despues usarlo

const mysql = require("mysql2/promise")
//Usando como en postgresql un pool para conexiones multiples 
//Para variables de entorno 
require("dotenv").config()

class Conn {

//Para que se pueda acceder a sus propiedades
static conexion = mysql.createPool ({


  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,  
  waitForConnections :true,
  connectionLimit : 10,
  queueLimit : 0

})

constructor(){



}


static async testConnection() {
  try {
    //Como es una propiedad estatica voy a usar Conn.prop
    const conn = await Conn.conexion.getConnection();
   
    conn.release(); // liberar la conexión al pool
    return true
  } catch (error) {
    return false
  }
}

}

module.exports = Conn