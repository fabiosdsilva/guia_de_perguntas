SELECT * FROM filmes;

UPDATE filmes SET img = 'https://h2i.s3.sa-east-1.amazonaws.com/upload/images/1214352021091561420ddb53c9d.jpeg' WHERE id = 16;

DELETE FROM filmes WHERE id = 1 and img = 'img1.jpg';
