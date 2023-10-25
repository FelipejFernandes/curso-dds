CREATE DATABASE pdv;

CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY NOT NULL,
  nome TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  senha TEXT NOT NULL
  );

CREATE TABLE categorias (
id SERIAL PRIMARY KEY NOT NULL,
  descricao TEXT NOT NULL
);

INSERT INTO categorias (descricao) VALUES 
('informatica'), ('celulares'),('beleza-perfumaria'),
('mercado'), ('livros-papelaria'), ('brinquedos'),
('moda'), ('bebe'), ('games');

CREATE TABLE produtos (
  id SERIAL PRIMARY KEY NOT NULL,
  descricao TEXT NOT NULL,
  quantidade_estoque INTEGER NOT NULL,
  valor INTEGER NOT NULL,
  categoria_id INTEGER REFERENCES categorias(id)
  );

  CREATE TABLE clientes (
  id SERIAL PRIMARY KEY NOT NULL,
  nome TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  cpf CHAR(11) UNIQUE NOT NULL,
  cep CHAR(8)  NOT NULL,
  rua TEXT NOT NULL,
  numero TEXT NOT NULL,
  bairro TEXT NOT NULL,
  cidade TEXT NOT NULL,
  estado TEXT NOT NULL
);

