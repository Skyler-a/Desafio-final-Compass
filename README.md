<h1 align="center">
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" width="200" height="190" />
  <p align="center">Desafio Final</p>
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

[API-Pessoas](#Api-Pessoa)

[API-Locadoras](#Api-Locadoras)

[API-Frota](#Api-Frota)

[API-Reserva](#Api-Reserva)



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
- [Axios](https://axios-http.com/docs/intro)

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

## Api-Locadoras

###Localizar uma locadora

``/api/v1/rental`` <br>
``/api/v1/rental?query=value``<br>
``/api/v1/rental/:id``

```bash
[{
    "name": "Gran Car Locadoras",
      "cnpj": "62639504000103",
      "activities": "Aluguel de Carros E Gestão de Frotas",
      "address": [
        {
          "cep": "96200-500",
          "number": "1234",
          "isFilial": "true",
          "street": "Rua tal",
          "neighborhood": "Bairro tal",
          "city": "Belém",
          "state": "PA",
          "_id": "62a92f23d55783af0f37ce6f"
        }
      ]
}]
```

### Cadastrar uma locadora

``/api/v1/rental``

```bash
[{
    "name": "Gran Car Locadoras",
      "cnpj": "62639504000103",
      "activities": "Aluguel de Carros E Gestão de Frotas",
      "address": {
          "cep": "96200-500",
          "number": "1234",
          "isFilial": "true"
      }
}]
```

- Todos os campos são required, exceto o campo complemento
- Não é possível haver CNPJs duplicados


### Deletar uma locadora

``/api/v1/rental/:id``

### Atualizar uma locadora

``/api/v1/rental/:id``

```bash
  {
  "name": "Locadoras Almir"
  }
```
## API-Frota

### Cadastrar Frota

``/api/v1/rental/:id/fleet``

```bash
{
    "id_car": "62b0cddd16dda2a8dddc8c2b",
    "id_rental": "62a93069d55783af0f37ce79",
    "status": "avaliable",
    "daily_value": 100,
    "plate": "AB211"
  }
```

- Todos os campos são required
- id_car representa um ID de um carro
- id_rental representa um ID de uma locadora
- status precisa ser available, unavailable, rented
- Não pode haver um mais de um carro com a mesma placa 

### Buscar Frota

``/api/v1/rental/:id/fleet`` <br>
``/api/v1/rental/:id/fleet?query=value``

```bash
[{
    "_id": "62b0fb66960928a6c4ffc3af",
    "id_car": "62b0cddd16dda2a8dddc8c2b",
    "id_rental": "62a93069d55783af0f37ce79",
    "status": "avaliable",
    "daily_value": 100,
    "plate": "AB211"
}]
```

### Deletar uma frota

``/api/v1/rental/:id/fleet:id``

### Atualizar uma frota

``/api/v1/rental/:id/fleet:id``

```bash
  {
  "status": "rented"
  }
```
## API-Reserva

### Cadastrar Reserva

``/api/v1/rental/:id/reserve``

```bash
{
    "id_user": "62a9e9ce7f59dc67201cd288",
    "data_start": "20/07/2022",
    "data_end": "22/07/2022",
    "id_car": "62b0cddd16dda2a8dddc8c2b",
    "id_rental": "62a93069d55783af0f37ce79"
  }
```

- Todos os campos são required
- id_car representa um ID de um carro
- id_rental representa um ID de uma locadora
- id_user representa um ID de usuário que PODE dirigir
- Data_star não pode ser menor que data_end e vice versa
- Final value é calculado de acordo com o valor diário

### Buscar Frota

``/api/v1/rental/:id/reserve`` <br>
``/api/v1/rental/:id/reserve?query=value``

```bash
[{
    "_id": "62b27db06aac910ac2079a33",
    "id_user": "62a9e9ce7f59dc67201cd288",
    "data_start": "20/07/2022",
    "data_end": "22/07/2022",
    "id_car": "62b0cddd16dda2a8dddc8c2b",
    "id_rental": "62a93069d55783af0f37ce79",
    "final_value": 200
}]
```

### Deletar uma reserva

``/api/v1/rental/:id/reserve:id``

### Atualizar uma reserva

``/api/v1/rental/:id/reserve:id``

```bash
  {
  "data_end": "23/07/2022"
  }
```