const db = require('./db');

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    }, 
    conteudo: {
        type: db.Sequelize.TEXT
    }
}); 

module.exports = Post; 

// Post.sync({force: true}); 
// Essa linha será necessária somente na criação da tabela postagens em específico, caso ela fique normal, as tabelas serão refeitas e apagadas toda hora
