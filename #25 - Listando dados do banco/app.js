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
    app.get('/', function(req, res) {
        Post.findAll({ order: [['id', 'DESC']], raw: true}).then(function(posts) {
            console.log(posts); 
            res.render('home', { posts: posts }); 
        })
    })
   
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

// Já tenho um pouco da noção para o registro dos livros, e tentar utilizar um CSS/Tailwind minimamente agradável

