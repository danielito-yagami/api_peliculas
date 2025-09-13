# API de Películas 🎬

API REST para consultar películas utilizando Node.js, Express y MySQL. La API está diseñada solo para **consultas** y soporta filtros por título, país, idioma y género. Implementa un patrón **DAO** que usa modelos y conexión a base de datos.
Hecha con Node js y mysql las consultas usan Store procedures y la api usa patrones de diseño como DAO y DRY. 
---

## 🌐 Base URL
```
http://TU-DOMINIO.com/   (local: http://localhost:8342)
```

---

## 🔹 Rutas Principales

### 1. Ruta raíz
```
GET /
```
- Verifica que el servidor está corriendo y la conexión a MySQL.
- **Respuestas:**
  - `200 OK`: "Conectado a MYSQL"
  - `500`: "Sin conexión a MYSQL" o "Error en la conexión"

---

### 2. Healthcheck
```
GET /health
```
- Verifica que el servicio está activo.
- **Respuesta:** `200 OK` (vacío)

---

### 3. Películas
```
GET /api/peliculas
GET /api/peliculas/:id
GET /api/peliculas?titulo=&pais=&idioma=&genero=
```
- **GET /api/peliculas:** Obtiene todas las películas.
- **GET /api/peliculas/:id:** Obtiene una película por su ID.
- **GET /api/peliculas con query params:** Filtra películas según parámetros opcionales:
  - `titulo` → Buscar por título parcial
  - `pais` → Filtrar por país
  - `idioma` → Filtrar por idioma
  - `genero` → Filtrar por género

**Ejemplo de petición con filtros:**
```
GET /api/peliculas?titulo=Matrix&pais=1&idioma=2&genero=3
```

**Ejemplo de respuesta:**
```json
[
  {
    "id": 1,
    "titulo": "Matrix",
    "sinopsis": "...",
    "estreno": "1999-03-31",
    "pais": "USA",
    "idioma": "Inglés",
    "genero": "Acción",
    "imagen": "url_imagen",
    "video": "url_video"
  }
]
```

---

### 4. Países
```
GET /api/pais
```
- Obtiene todos los países disponibles.

---

### 5. Idiomas
```
GET /api/idioma
```
- Obtiene todos los idiomas disponibles.

---

### 6. Géneros
```
GET /api/genero
```
- Obtiene todos los géneros disponibles.

---

## ⚙️ Headers
- `Content-Type: application/json`
- CORS habilitado para peticiones desde cualquier frontend.

---

## 💻 Instalación
```bash
git clone https://github.com/TU-USUARIO/api-peliculas.git
cd api-peliculas
npm install
```

### Ejecutar en local
```bash
npm start
```
- Servidor correrá en `http://localhost:8342` o el puerto definido en `.env`.

---

## 🔑 Variables de entorno
Crea un archivo `.env` con tus datos de MySQL:
```env
DB_HOST=localhost
DB_USER=usuario
DB_PASS=contraseña
DB_NAME=miapp
PORT=8342
```

> **Nota:** `.env` no debe subirse al repositorio.

---

## 🗂 Patrón DAO
La API utiliza un **DAO (Data Access Object)** para separar la lógica de acceso a datos. Ejemplo de uso en `PeliculaDAO`:
```js
const PeliculaDAO = require('./dao/PeliculaDAO');

// Obtener todas las películas
const peliculas = await PeliculaDAO.getALL();

// Obtener película por ID
const pelicula = await PeliculaDAO.getByID(1);

// Obtener películas filtradas
const filtradas = await PeliculaDAO.getBYFILTER('Matrix', 1, 2, 3);
```

Cada método devuelve instancias del modelo `Pelicula` o un mensaje en caso de no encontrar resultados.

---

## 🤝 Licencia
Libre para uso y pruebas.
