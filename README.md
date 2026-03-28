 CRUD con Node.js y SQLite3

##  Descripción del proyecto

Este proyecto implementa un sistema CRUD (Create, Read, Update, Delete) utilizando **Node.js**, **Express** y la librería **SQLite3**, con el objetivo de gestionar información de manera persistente en una base de datos local.

El sistema permite almacenar, consultar, actualizar y eliminar registros mediante peticiones HTTP, asegurando la permanencia de los datos incluso después de reiniciar el servidor.

---

##  Objetivos

* Implementar persistencia de datos utilizando SQLite.
* Desarrollar un API REST con Node.js y Express.
* Sustituir estructuras en memoria por consultas SQL.
* Garantizar la integridad de la información mediante operaciones CRUD.

---

##  Tecnologías utilizadas

* Node.js
* Express
* SQLite3
* JavaScript
* REST API

---

##  Estructura del proyecto

```bash
crud-sqlite-node/
 ├── database.js
 ├── server.js
 ├── movies.routes.js
 ├── database.sqlite
 ├── package.json
```

---

##  Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/crud-sqlite-node.git
```

### 2. Entrar al proyecto

```bash
cd crud-sqlite-node
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Ejecutar servidor

```bash
npm start
```

### 5. Abrir en navegador

```
http://localhost:3000
```

---

##  Funcionalidades

* Crear registros (POST)
* Obtener todos los registros (GET)
* Obtener registro por ID (GET)
* Actualizar registros (PUT)
* Eliminar registros (DELETE)
* Persistencia de datos en archivo SQLite

---

##  Endpoints de la API

###  Obtener todos

GET `/api/movies`

---

###  Obtener por ID

GET `/api/movies/:id`

---

###  Crear registro

POST `/api/movies`

```json
{
  "title": "Inception",
  "genre": "Sci-Fi",
  "year": 2010
}
```

---

###  Actualizar registro

PUT `/api/movies/:id`

```json
{
  "title": "Interstellar",
  "genre": "Sci-Fi",
  "year": 2014
}
```

---

### Eliminar registro

DELETE `/api/movies/:id`

---

##  Implementación técnica

El sistema utiliza la librería SQLite3 para conectarse a una base de datos local. En el archivo `database.js` se crea automáticamente la base de datos y la tabla si no existen.

Las operaciones CRUD se implementan mediante consultas SQL:

* INSERT → creación de datos
* SELECT → lectura de datos
* UPDATE → actualización
* DELETE → eliminación

Esto reemplaza el uso de arreglos en memoria, permitiendo persistencia real.

---

##  Pruebas

Se recomienda utilizar herramientas como:

* Postman
* Thunder Client (VS Code)

Para enviar peticiones HTTP a los endpoints definidos.


##  Conclusión 

En este proyecto implementé un sistema CRUD utilizando Node.js y SQLite3, lo cual me permitió comprender cómo manejar persistencia de datos en aplicaciones backend. Aprendí a utilizar consultas SQL dentro de un servidor Express y a sustituir estructuras temporales por almacenamiento permanente. Esta práctica fortaleció mis habilidades en desarrollo web y manejo de bases de datos.

---

##  Referencias 

* Node.js. (2023). *Node.js Documentation*. [https://nodejs.org](https://nodejs.org)
* Express.js. (2023). *Express Documentation*. [https://expressjs.com](https://expressjs.com)
* SQLite. (2023). *SQLite Documentation*. [https://www.sqlite.org/docs.html](https://www.sqlite.org/docs.html)
* npm. (2023). *sqlite3 package*. [https://www.npmjs.com/package/sqlite3](https://www.npmjs.com/package/sqlite3)

---

##  Autor

Raymundo Salas Rodríguez

