const express = require('express'); 
const app = express(); 

app.get('/', (req, res) => {
    res.send("Hello!"); 
}); 

app.get('/sobre', (req, res) => {
    res.send('Bem vindos a minha página sobre'); 
})

app.get('/blog', (req, res) => {
    res.send('Bem vindo ao meu blog'); 
})

app.get('/ola/:nome/:cargo/:cor', (req, res) => {
    res.send(`<h1>Olá, ${req.params.nome}</h1>
        <h2>Seu cargo é ${req.params.cargo}</h2>
        <h3>Sua cor favorita é ${req.params.cor}</h3>`);
})

app.use((req, res, next) => {
    res.status(404).send('Não encontrei a página amiguinho'); 
})

app.listen(8081, () => {
    console.log('Servidor Rodando!'); 
})

// Rota desejada: localhost:8081/Ola/Victor
