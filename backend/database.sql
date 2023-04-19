CREATE database testdb;
USE testdb;

DROP table IF EXISTs departments;
CREATE table departments (
department_id serial PRIMARY key,
description VARCHAR(255) NOT null
);

INSERT INTO departments (description)
VALUES ('Fastfood Department');

INSERT INTO departments (description)
VALUES (11);

INSERT INTO departments (description)
VALUES ('Douglas Van Der Merwe');

SELECT * FROM departments AS d ;
