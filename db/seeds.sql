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
    ('Human Resources', 1, 75000),
    ('Accountant', 2, 95000),
    ('Communications', 3, 50000),
    ('Product Marketing', 3, 50000),
    ('Creative/Brand', 3, 60000),
    ('Research and Development Project Coordinator)', 4, 95000),
    ('Research and Development Project Manager', 4, 100000),
    ('Web Analytics', 5, 100000),
    ('Softward Developer', 5, 105000),
    ('Computer support specialist', 5, 75000),
    ('Administrator', 6, 50000),
    ('Administrative officer', 6, 45000),
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
        ('Jackson', 'Jim', 120000, 16),
        ('Smith', 'Sue', 120000, 17),
        ('Gonsalez', 'Elena', 125, 18),
        ('Ritis', 'Steven', 110000,  19),
        ('Roode', 'Charles', 120000, 127, 20),
        ('Helling', 'Loise', 120000, 21),
        ('Rich', 'Peter', 100000000, 22);


    INSERT INTO employees (last_name, first_name, role_id, manager_id, salary)
    VALUES
    ('Smith', 'Kimberly', 1, 2, 75000,)
    ('Ronald', 'Firbank', 1, 2, ),
    ('Virginia', 'Woolf', 1, 2),
    ('Piers', 'Gaveston', 1, 2),
    ('Charles', 'LeRoi', 2, 3),
    ('Katherine', 'Mansfield', 2, 3),
    ('Dora', 'Carrington', 3, 4),
    ('Edward', 'Bellamy', 3, 4),
    ('Montague', 'Summers', 3, 4),
    ('Octavia', 'Butler', 3, 4),
    ('Unica', 'Zurn', );
    ('James', 'Fraser', ),
    ('Jack', 'London',),
    ('Robert', 'Bruce',),
    ('Peter', 'Greenaway',),
    ('Derek', 'Jarman',),
    ('Paolo', 'Pasolini',),
    ('Heathcote', 'Williams',),
    ('Sandy', 'Powell',),
    ('Emil', 'Zola', ),
    ('Sissy', 'Coalpits',),
    ('Antoinette', 'Capet',),
    ('Samuel', 'Delany',),
    ('Tony', 'Duvert',),
    ('Dennis', 'Cooper'),
    ('Monica', 'Bellucci',),
    ('Samuel', 'Johnson',),
    ('John', 'Dryden', ),
    ('Alexander', 'Pope',),
    ('Lionel', 'Johnson',),
    ('Aubrey', 'Beardsley',),
    ('Tulse', 'Luper',),
    ('William', 'Morris',),
    ('George', 'Shaw',),
    ('Arnold', 'Bennett',),
    ('Algernon', 'Blackwood',),
    ('Rhoda', 'Broughton',),
    ('Hart', 'Crane',),
    ('Vitorio', 'DeSica',),
    ('Wilkie', 'Collins',),
    ('Elizabeth', 'Gaskell',),
    ('George', 'Sand',),
    ('Vernon', 'Lee',),
    ('Arthur', 'Machen',),
    ('Frederick', 'Marryat',),
    ('Harriet', 'Martineau',),
    ('George', 'Meredith',),
    ('Margaret', 'Oliphant',),
    ('Anthony', 'Trollope',),
    ('Charlotte', 'Yonge',)
  

