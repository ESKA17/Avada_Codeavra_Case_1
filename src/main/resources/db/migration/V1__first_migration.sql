CREATE SEQUENCE account_seq
    START WITH 1
    INCREMENT BY 1;
create table ROLE_ENTITY
(
    id INTEGER NOT NULL,
    name NVARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);
create table USER_ENTITY
(
    id INTEGER NOT NULL,
    email    NVARCHAR(50) NOT NULL,
    password NVARCHAR(500) NOT NULL,
    ROLE_ENTITY_ID  INTEGER NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (ROLE_ENTITY_ID) REFERENCES ROLE_ENTITY(id)
);
create table USER_INFORMATION
(
    id LONG,
    name NVARCHAR(40),
    surname NVARCHAR(40)   ,
    father_name NVARCHAR(40),
    email NVARCHAR(50),
    age INTEGER,
    study_degree NVARCHAR(30),
    PRIMARY KEY (id)
);


INSERT INTO ROLE_ENTITY VALUES ( 1, 'ROLE_USER' );

