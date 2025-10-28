const Sequelize = require('sequelize'); 
const sequelize = new Sequelize('teste', 'root', '997085977', {
    host: "localhost", 
    dialect: 'mysql'
}); 

// Módulo para postagens e o outro para usuários 

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    }, 
    conteudo: {
        type: Sequelize.TEXT
    }
}); 

// Postagem.sync({force: true});

Postagem.create({
    titulo: "UM TITULO QUALQUER", 
    conteudo: "loremloremloremloremloremloremloremloremloremloremloremlorem"
}); 

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    }, 
    sobrenome: {
        type: Sequelize.STRING
    }, 
    idade: {
        type: Sequelize.INTEGER
    }, 
    email: {
        type: Sequelize.STRING
    }
}); 

Usuario.create({
    nome: "Pedro Luciano", 
    sobrenome: "Batista de Paula", 
    idade: 21, 
    email: "pedrolucianobatistadepaula@gmail.com"
});

// Usuario.sync({force: true});    
