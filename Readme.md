# 🍽️ API de Restaurante - Documentação

Esta é uma API RESTful desenvolvida em **Node.js**, utilizando **Express** e **Sequelize**, para gerenciar as operações de um restaurante: clientes, pratos e pedidos.

---

## 📄 Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação e Execução](#instala%C3%A7%C3%A3o-e-execu%C3%A7%C3%A3o)
- [Estrutura de Rotas](#estrutura-de-rotas)
  - [Clientes](#clientes)
  - [Pratos](#pratos)
  - [Pedidos](#pedidos)
  - [Relatórios](#relat%C3%B3rios)
- [Validações](#valida%C3%A7%C3%B5es)
- [Formato de Respostas](#formato-de-respostas)

---

## ⚖️ Tecnologias Utilizadas

- Node.js
- Express
- Sequelize ORM
- SQLite (pode ser substituído por outro RDBMS)
- Dotenv

---

## ♻️ Instalação e Execução

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor:

```bash
node app.js
```

O servidor será iniciado na porta `3000` (ou a definida no `.env`).

---

## ⚖️ Estrutura de Rotas

Todas as rotas estão agrupadas sob:

```
/api/cliente
/api/prato
/api/pedido
```

---

## 👥 Clientes

### POST `/api/cliente/cadastrar`

Cadastra um novo cliente.

```json
{
  "nome": "João Silva",
  "cpf": "123.456.789-00"
}
```

### GET `/api/cliente/`

Lista todos os clientes.

### GET `/api/cliente/:id`

Busca um cliente por ID.

### PUT `/api/cliente/:id`

Atualiza os dados de um cliente.

### DELETE `/api/cliente/:id`

Remove um cliente do sistema.

---

## 🍽️ Pratos

### POST `/api/prato/cadastrar`

Adiciona um novo prato ao cardápio.

```json
{
  "nome": "Feijoada",
  "preco": "39.90"
}
```

### GET `/api/prato/`

Lista todos os pratos.

### GET `/api/prato/:id`

Busca um prato por ID.

### PUT `/api/prato/:id`

Atualiza os dados de um prato.

### DELETE `/api/prato/:id`

Remove um prato do sistema.

---

## 🍔 Pedidos

### POST `/api/pedido/cadastrar`

Cria um novo pedido.

```json
{
  "ClienteId": 1,
  "pratos": [2, 3]  // IDs dos pratos
}
```

### GET `/api/pedido/`

Lista todos os pedidos, com cliente, pratos e total.

### GET `/api/pedido/:id`

Busca um pedido específico por ID.

### PUT `/api/pedido/:id`

Atualiza os pratos de um pedido existente.

### DELETE `/api/pedido/:id`

Remove um pedido.

---

## 📈 Relatórios

### GET `/api/pedido/quantidade`

Lista os pratos mais pedidos, em ordem decrescente.

### GET `/api/pedido/clientes-mais-pedidos`

Lista os clientes com mais pedidos.

### GET `/api/pedido/clientes-mais-gastaram`

Lista os clientes que mais gastaram (soma dos valores dos pedidos).

---

## 🔒 Validações

### Cliente

- Nome obrigatório
- CPF obrigatório
- Formato do CPF: `xxx.xxx.xxx-xx`

### Prato

- Nome obrigatório (entre 3 e 50 letras)
- Preço obrigatório (formato: `00.00`)

### Pedido

- `ClienteId` obrigatório
- Ao menos um prato deve ser informado

---

## 📃 Formato de Respostas

### Sucesso (201 - Criação)

```json
{
  "message": "Prato adicionado com sucesso!",
  "Prato": {
    "id": 5,
    "nome": "Feijoada",
    "preco": "39.90"
  }
}
```

### Erro (400 ou 500)

```json
{
  "message": "O CPF é obrigatório"
}

{
  "message": "Erro interno no servidor"
}
```

---

## 📆 Autor

Diego Lopes - Projeto de Restaurante com Node.js, Express e Sequelize.

---

## 📅 Status do Projeto

> 🌟 Concluído e funcional

Caso queira exportar para Swagger ou Postman, entre em contato. ✨

