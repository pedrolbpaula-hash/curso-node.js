-- Comandos da aula: 

SHOW DATABASES; 

CREATE DATABASE sistemaDeCadastro;

USE sistemaDeCadastro; 

SHOW TABLES;

CREATE TABLE usuarios(
    id INT NOT NULL PRIMARY KEY, 
    nome VARCHAR(50) NOT NULL, 
    emial VARCHAR(100) NOT NULL, 
    idade INT NOT NULL
);

SHOW TABLES; 

DESCRIBE usuarios; 
DESC usuarios; 
