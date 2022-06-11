INSERT INTO departments (name)
VALUES
('HR'),
('Accounts and Finance'),
('Sales and Marketing'),
('Research and development'),
('IT services'),
('Administration'),
('Security'),
('Management');

INSERT INTO roles (job_title, department_id, salary)
VALUES
    ('Human Resource Officer', 1, 75000),
    ('Accountant', 2, 95000),
    ('Communications', 3, 50000),
    ('Product Marketing', 3, 50000),
    ('Creative/Brand', 3, 60000),
    ('Research and Development Project Coordinator', 4, 95000),
    ('Research and Development Project Manager', 4, 100000),
    ('Web Analytics', 5, 100000),
    ('Softward Developer', 5, 105000),
    ('Computer support specialist', 5, 75000),
    ('Administrator', 6, 50000),
    ('Administrative Assistant', 6, 45000),
    ('Business Manager', 6, 56000),
    ('Security Officer', 7, 40000),
    ('Application security Administrator', 7, 104000),
    ('Chief of Cybersecurity', 8, 120000),
    ('Chief Information Officer', 8, 120000),
    ('Lead Administrator', 8, 75000),
    ('Human Resource Manager', 8, 110000),
    ('Research and Development Manager', 8, 120000),
    ('Accounts and Finance Manager', 8, 130000),
    ('CEO', 8, 100000000);

    INSERT INTO managers(last_name, first_name, salary, role_id)
    VALUES 
        ('Rich', 'Peter', 100000000, 22),
        ('Jackson', 'James', 120000, 16),
        ('Smith', 'Sue', 120000, 17),
        ('Gonsalez', 'Elena', 80000, 18),
        ('Ritis', 'Steven', 110000,  19),
        ('Roode', 'Charles', 120000, 20),
        ('Helling', 'Loise', 120000, 21);
        


    INSERT INTO employees (first_name, last_name, job_title, role_id, department_id, manager_id, salary)
    VALUES
    ('Kimberly', 'Smith', 'Human Resource Officer', 1, 1, 5, 75000),
    ('Ronald', 'Firbank', 'Accountant', 2,  2, 7, 95000),
    ('Virginia', 'Woolf', 'Accountant', 2, 2, 7, 95000),
    ('Piers', 'Gaveston', 'Communications', 3, 3, 6, 75000),
    ('Charles', 'LeRoi', 'Communications', 3, 3, 6, 50000),
    ('Katherine', 'Mansfield', 'Product Marketing', 4, 3, 6, 50000),
    ('Dora', 'Carrington', 'Product Marketing', 4, 3, 6, 50000),
    ('Edward', 'Bellamy', 'Creative', 5, 4, 6, 68000),
    ('Montague', 'Summers', 'Creative', 5, 4, 6, 60000),
    ('Octavia', 'Butler', 'Research and Development Coordinator', 6, 4, 6, 95000),
    ('Unica', 'Zurn', 'Research and Development Coordinator', 6, 4, 6, 95000),
    ('James', 'Fraser', 'Research and Development Manager', 7, 4, 6, 100000),
    ('Jack', 'London', 'Web Analytics', 8, 5, 3, 10000),
    ('Robert', 'Bruce', 'Web Analytics', 8, 5, 3, 105000),
    ('Peter', 'Greenaway', 'Software Developer', 9, 5, 3, 105000),
    ('Derek', 'Jarman', 'Software Developer', 9, 5, 3, 110000),
    ('Paolo', 'Pasolini', 'Software Developer', 9, 5, 3, 105000),
    ('Heathcote', 'Williams', 'Software Developer', 9, 5, 3, 100000),
    ('Sandy', 'Powell', 'Computer Support Specialist', 10, 5, 3, 80000),
    ('Emil', 'Zola', 'Computer Support Specialist', 10, 5, 3, 75000),
    ('Sissy', 'Coalpits', 'Computer Support Specialist', 10, 5, 3, 70000),
    ('Antoinette', 'Capet', 'Computer Support Specialist', 10, 5, 3, 75000),
    ('Samuel', 'Delany', 'Administrator', 11, 6, 4, 50000),
    ('Tony', 'Duvert', 'Administator', 11, 6, 4, 55000),
    ('Dennis', 'Cooper', 'Administrative Assistant', 12, 6, 4, 40000),
    ('Monica', 'Bellucci', 'Business Manager', 13, 6, 4, 56000),
    ('Samuel', 'Johnson', 'Business Manager', 13, 6, 4, 50000),
    ('John', 'Dryden', 'Security Officer', 14, 7, 2, 35000),
    ('Alexander', 'Pope', 'Security Officer', 14, 7, 2, 40000),
    ('Lionel', 'Johnson','Security Officer', 14, 7, 2, 40000),
    ('Aubrey', 'Beardsley', 'Security Officer', 14, 7, 2, 35000),
    ('Tulse', 'Luper', 'Security Officer', 14, 7, 2, 35000),
    ('William', 'Morris', 'Application Security Administrator', 15, 7, 2, 105000),
    ('George', 'Shaw', 'Application Security Administrator', 15, 7, 2, 100000),
    ('Arnold', 'Bennett', 'Application Security Administrator', 15, 7, 2, 106000),
    ('Algernon', 'Blackwood', 'Application Security Administrator', 15, 7, 2, 105000),
    ('Rhoda', 'Broughton', 'Application Security Administrator',15, 7, 2, 100000),
    ('Rich', 'Peter', 'CEO',  22, 8, NULL, 100000000),
    ('James', 'Jackson', 'Chief of Cybersecurity', 16, 8, NULL, 120000),
    ('Susan', 'Smith', 'Chief Information Officer', 17, 8, NULL, 120000),
    ('Elena', 'Gonzalez', 'Lead Administrator', 18, 8, NULL, 80000),
    ('Steven', 'Ritis', 'Human Resource Manager', 19, 8, NULL, 110000),
    ('Charles', 'Roode', 'Research and Development Manager', 20, 8, NULL, 120000),
    ('Loise', 'Hellings', 'Accounts and Finance Manager', 21, 8, NULL, 120000);
  

