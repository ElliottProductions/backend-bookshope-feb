-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS books;


CREATE TABLE books (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title VARCHAR,
  released INT
);

INSERT INTO books (title, released) VALUES
('Lord of the Things', 1922);

CREATE TABLE authors (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR,
  dob VARCHAR,
  pob VARCHAR
);

INSERT INTO authors (name, dob, pob) VALUES
('J. R. R. Tolkien', 'Sun Jan 03 1892', 'Bloemfontein, Orange Free State');