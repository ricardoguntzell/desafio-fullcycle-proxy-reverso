const express = require('express')
const app = express()
const port = 3000

//Prepara Estrutura HTML
var  html="";
html += "<hr>";
html += "<h1>Full Cycle Rocks!</h1>";
html += "<hr>";

app.get('/', (req, res) => {
    res.send(html);                  
})

app.listen(port, () => {
    console.log('###Desafio NODEjs### by Ricardo Guntzell - Rodando na porta '+ port)
})