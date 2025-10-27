// Acredito que será necessário criar uma variável com o nome da página html, ou a chamado do file system algo assim 

const express = require('express'); 
const fs = require('fs');
const app = express(); 
const port = 5000; 


app.get('/', (req, res) => {
    fs.readFile('./html/index.html', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file: ',err); 
            return; 
        }
        res.send(data); 
    })
})

app.get('/send', (req, res) => {
    res.sendFile(__dirname + "/html/index.html"); 
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + "/html/about.html"); 
})

app.get('/hello/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}`); 
})

app.use((req, res, next) => {
    res.status(404).send('Page not found');
})

app.listen(port, () => {
    console.log(`Server it's running on port ${port}`); 
})
