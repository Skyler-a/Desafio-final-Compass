# Desafio-final-Compass

<h1 align="center">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" width="200" height="190" />
  <p align="center">Desafio Sprint 4 | Compass</p>
</h1>

<p>
  <img src="https://img.shields.io/badge/node-v16.13-brightgreen"/>
  <img src="https://img.shields.io/badge/npm-8.1-green"/>
</p>

## Indice 
[Descrição](#Descrição)

[Funcionalidades](#Funcionalidades)

[Instalação](#Instalação)

[API-Carros](#Api-Carros)

[API-Pessoas](#Api-Pessoas)




## Descrição

API para gerenciamento de uma locadora de carros de luxo e semi-luxo. Tais como criação de locadora, cadastro de carro, cadastro de pessoa.


## Funcionalidades

:heavy_check_mark: `Funcionalidade 1:` Realizar cadastro de carros.

:heavy_check_mark: `Funcionalidade 2:` Cadastrar pessoas.

:heavy_check_mark: `Funcionalidade 3:` Listar cadastros realizados, podendo usar busca personalizada para encontrar o cadastro que deseja



## Instalação

No terminal, clone o projeto:

```bash
git clone https://github.com/Skyler-a/Desafio-final-Compass
```
 
Dentro da pasta do projeto, instale as dependencias

```bash
npm install
```

### Iniciando o Servidor 

No terminal inicie o servidor

```bash
npm start
```

### Ferramentas :wrench:

- [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- [NodeJs](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Joi](https://joi.dev/)
- [Moment](https://momentjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Nodemon](https://www.npmjs.com/package/nodemon)

## API-Carros


### Cadastrar Carro
``/api/v1/car/``

```bash
{
    "model": "S10 2.8",
    "type": "Sedan",
    "brand": "GM",
    "year": "2022",
    "accessories": [
      {
        "description": "ar-condicionado"
      }
    ],
    "passengersQtd": 4
  },
}
```
- Todos os Campos são Obrigatorios.
- É necessário ter pelo menos UM acessório;
- O ano do carro não pode ser menor que 1950 e maior que 2022;
- Não pode haver acessórios repetidos;
- A quantidade de passageiros não pode ser menor que 3;


### Atualizar Carro
``/api/v1/car/:id``

```bash
{
    model:"S20"
}
```

- Qualquer campo pode ser atualizado
- Nenhum campo é obrigatorio

### Deletar Carro

``/api/v1/car/:id``

### Buscar Carro

``/api/v1/car`` <br>
``/api/vi/car?query=value``

```bash
[{
    "_id": "629d1f807b1651bf71da4dbf",
    "model": "S10 2.8",
    "type": "Sedan",
    "brand": "GM",
    "year": "2022",
    "accessories": [
      {
        "description": "ar-condicionado"
      }
    ],
    "passengersQtd": 4
  },
    }]
```
## API-Pessoa

### Cadastrar Pessoa

``/api/v1/person``

```bash
{
    "name": "Arthur",
    "cpf": "26668031048",
    "birthDay": "20/07/2000"
    "email": "emailvalido1@gmail.com",
    "canDrive": "yes"
  }
```

- Todos os campos são required
- O usuário tem que ter no mínimo 18 anos a partir da data de cadastro.
- Precisa ter um CPF valido
- Precisa ter uma senha no mínimo 6 dígitos
- A senha não deve ser armazenada como texto
- Precisa ter um email válido
- canDrive pode ser yes ou no

### Buscar Pessoa

``/api/v1/person`` <br>
``/api/v1/person?query=value``

```bash
[{
    "_id": "629fe47c7c59fd0a9948db8c",
    "name": "Arthur",
    "cpf": "266.680.310-48",
    "birthDay": "2001-07-20T00:00:00.000Z",
    "email": "emailvalido1@gmail.com",
    "canDrive": "yes"
}]
```

### Deletar uma pessoa

``/api/v1/person/:id``

### Atualizar uma pessoa

``/api/v1/person/:id``

```bash
  {
  "name": "Roberto"
  }
```
