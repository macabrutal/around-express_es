# Around the U.S. Back End

Proyecto 13: Lista de control

## Descripción general

- Este proyecto es la creación de mi propio servidor para el proyecto "Alrededor de los EE. UU.".
- El objetivo es crear un servidor con una API y autenticación del usuario

## Funcionalidad

- Se creó un servidor con una API
- Autenticación del usuario.
- Desplega el backend en una máquina remota.
- Utiliza el módulo fs y su método integrado `readFile()` para acceder y manipular los archivos de datos JSON.
- Se agregó una excepción para \_id

## Tecnologias Utilizadas

- Node.js
- Express.js
- linter: para encontrar errores
- nodemon: La aplicación debe iniciarse con hot reload cuando se ejecuta el comando npm run dev

## Directorios

`/data` — JSON files to temporarily emulate database integration.

`/routes` — routing files.

All other directories are optional and may be created by the developer if necessary.

## Rutas

- GET localhost:3000/users — responde con JSON desde el archivo users.json
- GET localhost:3000/card — responde con JSON desde el archivo cards.json
- GET localhost:3000/users/8340d0ec33270a25f2413b69 — responde con un JSON que tiene datos del usuario con un id que coincide con el identificador que se pasó después de /users

## Running the Project

`npm run start` — inicia el servidor en localhost:3000

`npm run dev` — inicia el servidor en localhost:3000 con el hot reload
habilitado.
