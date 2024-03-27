const express = require('express')
const app = express()
const port = 3000

/**Config DB MyySQL*/
const config = {
    host:'desafio-db',
    user:'root',
    password:'root',
    database:'desafio',
};

//Cria conexão
const mysql = require('mysql')
const connection = mysql.createConnection(config);

//Querys que serão usadas para inserir e listar
const sqlInsert = "INSERT INTO pessoas(nome) values ('Desafio Nginx, Mysql e Node.js #FullCycle')";
const sqlSelect = "SELECT * FROM pessoas";

//Faz o Insert no MyySQL
connection.query(sqlInsert)

//Prepara Estrutura HTML
var  html="";
html += "<hr>";
html += "<h1>Full Cycle Rocks!</h1>";
html += "<hr>";

// Faz a listagem dos dados que estão no MyySQL
connection.query(sqlSelect, (err, rows) => {
    if(err)throw err;

    //Recupera os registros e armazena na string HTML
    for (const index in rows) {  
//        html += "<p>" + rows[index].nome + "</p>";
        html += "<ul><li>" + rows[index].id + "</li>" + "<li>" + rows[index].nome + "</li>" +"</ul>";
    }
});

//Fecha conexão
connection.end()

app.get('/', (req, res) => {
    res.send(html);                  
})

app.listen(port, () => {
    console.log('###Desafio NODEjs### by Ricardo Guntzell - Rodando na porta '+ port)
})