# 🚀 Integração BrasilAPI

API desenvolvida em **ASP.NET Core** utilizando os conceitos de **DDD (Domain Driven Design)** para integração com a **BrasilAPI**, permitindo consultas de CEP de forma organizada, escalável e seguindo boas práticas de arquitetura de software.

## 📋 Sobre o Projeto

Este projeto tem como objetivo consumir a BrasilAPI para realizar consultas de CEP e retornar os dados de endereço ao usuário através de uma API REST.

A aplicação foi construída utilizando:

- ASP.NET Core Web API
- Entity Framework Core
- DDD (Domain Driven Design)
- Injeção de Dependência
- HttpClient
- Swagger/OpenAPI

---

## 🏗️ Arquitetura

O projeto segue a arquitetura em camadas:

```text
├── Cep.Api
│   ├── Controllers
│   ├── Program.cs
│   └── appsettings.json
│
├── Cep.Domain
│   ├── Entities
│   ├── Interfaces
│   └── DTOs
│
├── Cep.Infrastructure
│   ├── Data
│   ├── Repositories
│   └── Services
│
└── Cep.Application
    └── Services
```

### Domain

Contém:

- Entidades
- Interfaces
- Contratos
- Regras de negócio

### Infrastructure

Responsável por:

- Acesso ao banco de dados
- Consumo da BrasilAPI
- Implementação dos repositórios

### Application

Responsável pela orquestração das regras de negócio.

### API

Responsável pela exposição dos endpoints REST.

---

## 🔍 Funcionalidades

### Consulta de CEP

Busca informações de endereço utilizando a BrasilAPI.

### Exemplo de Requisição

```http
GET /api/cep/01001000
```

### Exemplo de Resposta

```json
{
  "cep": "01001000",
  "street": "Praça da Sé",
  "neighborhood": "Sé",
  "city": "São Paulo",
  "state": "SP"
}
```

---

## ⚙️ Configuração do Ambiente

### 1. Clonar o Repositório

```bash
git clone https://github.com/14kgamers/Integracao-BrasilApi.git
```

### 2. Entrar na Pasta

```bash
cd Integracao-BrasilApi
```

### 3. Configurar a Connection String

No arquivo `appsettings.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=SEU_SERVIDOR;Database=BrasilApiDb;Trusted_Connection=True;TrustServerCertificate=True"
  }
}
```

### 4. Executar as Migrations

```bash
dotnet ef database update
```

### 5. Executar a Aplicação

```bash
dotnet run
```

---

## 📖 Swagger

Após iniciar a aplicação, acesse:

```text
https://localhost:5001/swagger
```

ou

```text
http://localhost:5000/swagger
```

para visualizar e testar os endpoints disponíveis.

---

## 🔄 Fluxo da Aplicação

```text
Cliente
   ↓
Controller
   ↓
Repository
   ↓
BrasilAPI
   ↓
Banco de Dados
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão |
|------------|---------|
| .NET | 10+ |
| ASP.NET Core | 10+ |
| Entity Framework Core | 10+ |
| SQL Server | Atual |
| Swagger | OpenAPI |
| BrasilAPI | REST API |

---


## 🤝 Contribuindo

1. Faça um Fork do projeto

2. Crie uma Branch

```bash
git checkout -b feature/minha-feature
```

3. Commit suas alterações

```bash
git commit -m "Minha nova feature"
```

4. Faça o Push

```bash
git push origin feature/minha-feature
```

5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

## 👨‍💻 Autor

**Vitor Oliveira**

GitHub: https://github.com/14kgamers

---

Projeto desenvolvido para fins de estudo utilizando **ASP.NET Core**, **DDD**, **Entity Framework Core** e integração com a **BrasilAPI**.
