const Sequelize = require('sequelize'); 
const sequelize = new Sequelize('teste', 'root', '997085977', {
    host: "localhost", 
    dialect: 'mysql'
}); 

sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso!"); 
}).catch((erro) => {
    console.log("Falha ao se conectar: " + erro); 
})
