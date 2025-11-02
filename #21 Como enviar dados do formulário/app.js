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

    app.post('/add', (req, res) => {
        res.send(`<h1>Formulário recebido com sucesso</h1>`); 
    })

    // Relembrar sintaxe para "pegar" um dado do usuário 

    // app.get('/:name', (req, res) => {
    //     const name = req.params.name; 
        
    //     res.send(`<h1>Hello, ${name}</h1>`); 
    // })

app.listen(port, () => {
    console.log(`Servidor rodando na url http://localhost:${port}`); 
})
