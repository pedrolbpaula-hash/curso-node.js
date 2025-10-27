// Criação da página principal, about, blog e home para treinar a sintaxe e lógica da criação do servidor 

const express = require('express'); 
const app = express(); 
const port = 5000; 

app.get('/', (req, res) => {
    res.send('Página principal'); 
})

app.get('/sobre', (req, res) => {
    res.send('Página sobre'); 
})

app.get('/home', (req, res) => {
    res.send('Página home'); 
})

app.use((req, res, next) => {
    res.status(404).send('Infelizmente não foi possível encontrar essa página'); 
})

app.listen(port, () => {
    console.log('Servidor está rodando nornalmente'); 
})

