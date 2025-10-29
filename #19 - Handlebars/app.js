const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

const port = 5000;

// Config 
// Template Engine 
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', './views');

// Conexão com o banco de dados MySql
const sequelize = new Sequelize('teste', 'root', '997085977', {
    host: "localhost",
    dialect: "mysql"
})


app.get('/', (req, res) => {
    res.send(`<h1>Teste</h1>`);
})

app.use((req, res, next) => {
    res.status(404).send('<h1>Não foi possível localizar a sua página</h1>');
})

app.listen(port, () => {
    console.log(`Servidor está rodando na porta ${port}`);
})
