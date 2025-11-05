const express = require('express'); 
const app = express(); 
const handlebars = require('express-handlebars'); 
const { engine } = require('express-handlebars'); 
const bodyParser = require('body-parser'); 
const Post = require('./mods/Post'); 
// Config 
    // Template Engine 
        app.engine('handlebars', engine({defaultLayout: 'main'})); 
        app.set('view engine', 'handlebars'); 
    // Body Parser 
        app.use(bodyParser.urlencoded({extended: false})); 
        app.use(bodyParser.json()); 

    // Rotas 
    app.get('/', (req, res) => {
        res.render('home'); 
    })
    // Depois do livro ter sido postado, ele precisará entrar nessa rota

    app.get('/cad', (req, res) => {
        res.render('form.handlebars'); 
    })

    app.post('/add', (req, res) => {
        Post.create({
            titulo: req.body.titulo, 
            conteudo: req.body.conteudo
        }).then(() => {
            res.redirect('/'); 
        }).catch((erro) => {
            res.send(`Houve um erro: ${erro}`); 
        })
    })

app.listen(5000, () => {
    console.log("Servidor Rodando na url://localhost:5000"); 
})

