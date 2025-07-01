# 🍽️ API de Restaurante - Documentação

Esta é uma API RESTful desenvolvida em **Node.js**, utilizando **Express** e **Sequelize**, para gerenciar as operações de um restaurante: clientes, pratos e pedidos.

---

## 📄 Sumário

- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura de Rotas](#estrutura-de-rotas)
  - [Clientes](#clientes)
  - [Pratos](#pratos)
  - [Pedidos](#pedidos)
  - [Relatórios](#relat%C3%B3rios)
- [Validações](#valida%C3%A7%C3%B5es)

---

## ⚖️ Tecnologias Utilizadas

- Node.js
- Express
- Sequelize ORM
- Postgresql
- Dotenv

---

## ⚖️ Estrutura de Rotas

As bases das rotas estão agrupadas em app.js sob:

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
