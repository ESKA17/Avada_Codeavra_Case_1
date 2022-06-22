CREATE SEQUENCE account_seq
    START WITH 1
    INCREMENT BY 1;
create table ROLEENTITY
(
    id INTEGER NOT NULL,
    name NVARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);
create table USER_INFORMATION
(
    id INTEGER NOT NULL,
    name    NVARCHAR(50) NOT NULL,
    surname NVARCHAR(50) NOT NULL,
    fatherName NVARCHAR(50) NOT NULL,
    email NVARCHAR(50) NOT NULL,
    age  INTEGER NOT NULL,
    studyDegree NVARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);
create table USERENTITY
(
    id INTEGER NOT NULL,
    email NVARCHAR(50) NOT NULL,
    password NVARCHAR(500) NOT NULL,
    ROLEENTITY_ID  INTEGER NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (ROLEENTITY_ID) REFERENCES ROLEENTITY(id)
);

INSERT INTO ROLEENTITY VALUES ( 1, 'ROLE_USER' );
