const express = require('express'); 
const app = express();
const port = 8081; 

app.get('/', (req, res) => {
    res.send("<h1>Seja bem-vindo ao meu app!</h1>"); 
})

app.get("/sobre", (req, res) => {
    res.send("Minha página sobre"); 
})

app.get("/blog", (req, res) => {
    res.send("Bem-vindo ao meu blog!"); 
})

app.use((req, res, next) => {
    res.status(404).send('Infelizmente não foi possível encontrarmos a sua página');
})

app.listen(port, () => {
    console.log(`Server it's running on port url http:localhost:${port}`); 
}); 

// GET = mostrar os dados da página 

// Criar o not found agui também 
