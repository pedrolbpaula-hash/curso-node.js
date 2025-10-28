INSERT INTO usuarios (id, nome, emial, idade)
VALUES 
(1, 'pedro', 'pedrodasilva@gmail.com', 21); 

ALTER TABLE usuarios RENAME COLUMN 
emial TO email; 

INSERT INTO usuarios(id, nome, email, idade) VALUES(
    2, 
    "Victor Lima", 
    "email@teste.com", 
    8
); 

SELECT * FROM usuarios; 

INSERT INTO usuarios (id, nome, email, idade)
VALUES
(3, 'Luis Silva', "email@teste22.com", 28), 
(4, 'Fernanda Luiza', 'emaildasilva@teste44.com', 25), 
(5, 'Jaqueline De Oliveira', 'email@teste55.com', 21);

INSERT INTO usuarios (idade, email, nome, id) VALUES (
    8, 
    "maria@teste22.com", 
    "Maria Clara",
    6
);

SELECT * FROM usuarios 
WHERE id = 1; 

SELECT * FROM usuarios 
WHERE idade = 8; 

SELECT * FROM usuarios 
WHERE nome = "pedro"; 

SELECT * FROM usuarios 
WHERE idade >= 18; 
