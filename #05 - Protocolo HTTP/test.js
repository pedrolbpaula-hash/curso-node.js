const express = require('express'); 
const app = express(); 
const port = 5000; 

app.get('/', (req, res) => {
    res.send('<h1>teste da silva</h1>'); 
})

// Eu acredito que com os dois pontos o express identifica que será um parâmetro que provavelmente será alterado 

app.get('/:nome', (req, res) => {
    const nomeUsuario = req.params.nome; 

    res.send(`Olá, ${nomeUsuario}`); 
})

app.use((req,res, next) => {
    res.status(404).send('<h1>Num encontrei</h1>');
})

app.listen(port, () => {
    console.log(`servidor está rodando na porta ${port}`); 
})
