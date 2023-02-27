// Esta es la misma Expression, pero con otra sintaxis, aplicando "MODULE":
// const express = require('express')

import express from "express"
import { PORT } from "./config.js"

 
const app = express()

app.get('/', (req, res)=>{
    res.send('<h1>Hola Marce</h1>')
})

app.get('/about', (req, res)=>{
    res.send('<h1>Como te va ala carachas!...</h1>')
})

app.listen(PORT)
console.log('Servidor en el puerto', PORT)