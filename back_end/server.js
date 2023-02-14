/* Llamado de dependencias */
const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()

/* importaciones de funciones */
const conectDB = require('./config/db')

/* Conexion al puerto */
const port = process.env.PORT

/* Conexion a la base de mongo */
conectDB()

/* Creacion de APP */
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

// Conexion al puerto asignado
app.listen(port, () => console.log(`Server started on port ${port}`))
