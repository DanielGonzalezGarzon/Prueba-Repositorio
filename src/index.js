// Esta es la misma Expression, pero con otra sintaxis, aplicando "MODULE":
// const express = require('express')

import express from "express"
const app = express()

app.get('/', (req, res)=>{
    res.send('<h1>WELCOME</h1>')
})

app.get('/about', (req, res)=>{
    res.send('<h1>ei tonce que...</h1>')
})

app.listen(3000)
console.log('Servidor en el puerto', 3000)