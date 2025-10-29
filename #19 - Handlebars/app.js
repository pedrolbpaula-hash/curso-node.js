const express = require('express'); 
const app = express(); 
const handlebars = require('express-handlebars'); 
const port = 5000; 

// Config 
    // Template Engine 
    app.engine('handlebars', handlebars({defaultLayout: 'main'})); 
    app.set('view engine', 'handlebars'); 
    // Conexão com o banco de dados MySql
    const Sequelize = require('sequelize'); 
    const sequelize = new Sequelize('teste', 'root', '997085977', {
        host: "localhost", 
        dialect: "mysql"
    })


app.get('/', (req, res) => {
    res.send(`<h1>Teste da Silva</h1>`); 
})

app.use((req, res, next) => {
    res.status(404).send('<h1>Não foi possível localizar a sua página</h1>'); 
})

app.listen(port, () => {
    console.log(`Servidor está rodando na porta ${port}`); 
})
