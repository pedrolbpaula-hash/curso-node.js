const db = require('./db'); 

// Cria a tabela chamada postagens
const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    }, 
    conteudo: {
        type: db.Sequelize.TEXT
    }
}); 

module.exports = Post; 
