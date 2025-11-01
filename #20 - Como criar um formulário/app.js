const express = require('express'); 
const { engine } = require('express-handlebars'); 
const app = express(); 
const handlebars = require('express-handlebars'); 
const Sequelize = require('sequelize'); 

const port = 5000; 

// Config 
    // Template Engine 
        app.engine('handlebars', engine({ defaultLayout: 'main'})); 
        app.set('view engine', 'handlebars'); 
        app.set('views', './views'); 

    // Conexão com o banco de dados MySql
        const sequelize = new Sequelize('teste', 'root', '997085977', {
            host: "localhost", 
            dialect: 'mysql'
        })

    // Rotas 
    app.get('/cad', (req, res) => {
        res.render('form');
    })

app.listen(port, () => {
    console.log(`Servidor rodando na url http://localhost:${port}`); 
})
