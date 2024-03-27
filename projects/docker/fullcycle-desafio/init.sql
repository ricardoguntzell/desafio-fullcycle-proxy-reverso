use desafio;

CREATE TABLE IF NOT EXISTS pessoas(id int not null auto_increment, nome varchar(100), primary key(id));

-- INSERT INTO pessoas (nome) VALUES ('Desafio - Inclusao automatica - Full Cycle Rocks!');

REPLACE INTO pessoas VALUES (1, 'Desafio - Inclusao automatica - Full Cycle Rocks!');