const http = require('http'); 

http.createServer(function(req, res) {
    res.end("Hello World! Welcome to my website");
}).listen(8081); 

console.log("O servidor está rodando");

// Criar o servidor sozinho depois da finalização da aula para fixar a sintaxe e utilização dos conceitos 

