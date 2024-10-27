CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee(
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
); 

DESCRIBE employee;

INSERT INTO employee VALUES 
    (1, 'Andres felipe', 5000),
    (2, 'Jennyfer Tatiana', 30000),
    (3, 'Ehtan', 8000), 
    (4, 'Juanito alimaña', 50);