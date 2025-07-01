-- Active: 1745317111902@@127.0.0.1@3306@lesson_10_sup

USE lesson_10_sup

DROP Table users

CREATE TABLE users (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, username VARCHAR(55) UNIQUE, age INT, full_name VARCHAR(55), createAt DATE, updateAt DATE)

SELECT * FROM users