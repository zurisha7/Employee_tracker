DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;
USE employee_tracker;

DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS managers;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS departments;

CREATE TABLE departments (
    department_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE roles (
    role_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(50) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id) REFERENCES departments(department_id) ON DELETE CASCADE
);

CREATE TABLE managers (
    manager_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    last_name VARCHAR(30) NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    salary INTEGER NOT NULL,
    role_id INTEGER NOT NULL,
    FOREIGN KEY (role_id) REFERENCES roles(role_id) ON DELETE CASCADE  
);

CREATE TABLE employees (
    employee_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    last_name VARCHAR(30) NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    job_title VARCHAR(50) NOT NULL,
    salary INTEGER NOT NULL,
    department_id INTEGER NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER, 
    FOREIGN KEY (manager_id) REFERENCES managers(manager_id) ON DELETE SET NULL
    FOREIGN KEY (role_id) REFERENCES roles.(role_id)
);




