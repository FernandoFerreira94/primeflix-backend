# 🎬 PrimeFlix - Backend

Backend da aplicação **PrimeFlix**, construído com Node.js, Express, Prisma ORM e PostgreSQL.

Este serviço gerencia autenticação de usuários (registro e login), utiliza JWT para sessões seguras com cookies e permite o cadastro, listagem, detalhamento e exclusão de filmes.  

---

## ⚙️ Tecnologias

- Node.js + Express
- Prisma ORM + PostgreSQL
- JWT + Cookies
- BcryptJS para criptografia de senhas
- CORS e Dotenv para configuração do ambiente

---

## 🧱 Funcionalidades

- 🔐 **Autenticação segura**
  - Registro de usuário com senha criptografada
  - Login com geração de token JWT
  - Armazenamento do token em `cookie` httpOnly

- 👤 **Gestão de usuários**
  - Cadastro (`/register`)
  - Login (`/login`)
  - Validação do token para proteger rotas privadas

- 🎬 **Gerenciamento de Filmes**
  - Cadastro de filmes com título, banner, idioma, gêneros, data de lançamento e usuário relacionado
  - Listagem de todos os filmes cadastrados
  - Detalhamento individual de filmes via ID
  - Exclusão de filmes

---

## 🚀 Como executar localmente

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/primeflix-backend.git
