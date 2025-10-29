# Frontend - CRUD de Clientes

Esta é a interface web (frontend) para o sistema de cadastro de clientes, construída com Angular 20.3.6 O projeto foi desenvolvido como parte de um treinamento full-stack.

Este projeto foi feito para consumir a API de backend, que está disponível em outro repositório:
**➡️ Repositório do Backend (API): [https://github.com/EnricoNSilva/crud-clientes-api](https://github.com/EnricoNSilva/crud-clientes-api)**

---

## Funcionalidades Implementadas

* **Listar (Read):** Exibe todos os clientes cadastrados na tela principal.
* **Cadastrar (Create):** Permite adicionar um novo cliente através de um formulário.
* **Alterar (Update):** Permite editar os dados de um cliente existente através de um modal (popup).
* **Excluir (Delete):** Permite remover um cliente do banco de dados com uma confirmação.

## Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas:
* [Node.js](https://nodejs.org/) (que inclui o npm)
* [Angular CLI](https://angular.io/cli) (Instale com `npm install -g @angular/cli`)
* [Git](https://git-scm.com/)

## 🚀 Como Rodar o Frontend

1.  **Clone este repositório:**
    ```bash
    git clone https://github.com/EnricoNSilva/Crud-Clientes-Frontend.git
    cd CRUD-Clientes
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Inicie a aplicação:**
    ```bash
    ng serve
    ```

A aplicação será aberta automaticamente no seu navegador em `http://localhost:4200`.

### ⚠️ **IMPORTANTE: Pré-requisito do Backend**

Para que esta aplicação (Frontend) funcione corretamente, o **servidor backend deve estar rodando** ao mesmo tempo.

Por favor, siga as instruções no [README do repositório da API](https://github.com/EnricoNSilva/crud-clientes-api) para iniciar o servidor em `http://localhost:3000`.
