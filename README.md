# Hub_de_Leitura_Teste_UI
Hub de Leitura Teste UI

## ⚡ Instalação Rápida

### Pré-requisitos

- Node.js 18+ instalado
- Git instalado
- Editor de código (Visual Studio Code recomendado)

### 1. Clone o Repositório e entre na pasta

```bash
https://github.com/alexgrocha/Hub_de_Leitura_Teste_UI.git
cd hub-de-leitura-integrado
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Inicie o Servidor

```bash
npm start
```

### 4. Acesse o Sistema

- **Sistema:** http://localhost:3000
- **API Docs:** http://localhost:3000/api-docs
- **Admin:** http://localhost:3000/admin-dashboard.html

## 🔑 Credenciais de Teste

### Administrador

- **Email:** admin@biblioteca.com
- **Senha:** admin123
- **Permissões:** Acesso total ao sistema

### Usuário Comum

- **Email:** usuario@teste.com
- **Senha:** user123
- **Permissões:** Reservas e consultas

## 🧪 Testando a API

### Com cURL

```bash
# Login
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@biblioteca.com","password":"admin123"}'

# Listar livros (com token)
curl -X GET http://localhost:3000/api/books \
  -H "Authorization: Bearer SEU_TOKEN_AQUI"
```

### Com Postman/Insomnia

1. Importe a coleção do Swagger: http://localhost:3000/api-docs
2. Configure o token JWT no cabeçalho Authorization
3. Teste todos os endpoints disponíveis

## 🤝 Contribuindo

### Para Instrutores

1. Fork o repositório
2. Crie cenários de teste adicionais
3. Adicione novos endpoints para prática
4. Documente bugs intencionais para os alunos encontrarem
5. Envie um Pull Request

### Para Alunos

1. Reporte bugs encontrados (é parte do aprendizado!)
2. Sugira melhorias na documentação
3. Compartilhe casos de teste interessantes
4. Contribua com exemplos de automação


### Resetar Banco de Dados

```bash
# Pare o servidor "CTRL + C" e delete o arquivo do banco
rm database/biblioteca.db
ou apague manualmente entrando na pasta.
# Rode o comando para recriar o banco
npm run db
# Reinicie o servidor para recriar as tabelas
npm start
```

## 🐛 Problemas Comuns

### Erro "Port 3000 already in use"

```bash
# Encontrar processo usando a porta
lsof -ti:3000
# Finalizar processo
kill -9 PID_DO_PROCESSO
```

### Token expirado

- Faça login novamente para obter um novo token
- Tokens expiram em 1 hora por padrão

### Banco de dados corrompido

- Delete o arquivo `database/biblioteca.db`
- Rode o comando `npm run db` para recriar o banco

## 📚 Recursos de Aprendizado

### Documentação

- [Express.js](https://expressjs.com/)
- [JWT.io](https://jwt.io/)
- [SQLite Tutorial](https://www.sqlitetutorial.net/)
- [Swagger/OpenAPI](https://swagger.io/docs/)

### Ferramentas de Teste

- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)
- [Jest](https://jestjs.io/) - Para testes automatizados
- [Newman](https://github.com/postmanlabs/newman) - CLI do Postman


### Uso Permitido

- ✅ Uso educacional e acadêmico
- ✅ Modificação para fins didáticos
- ✅ Distribuição para alunos
- ✅ Criação de cursos baseados no projeto

### Uso Restrito

- ❌ Uso comercial direto
- ❌ Venda do código
- ❌ Redistribuição sem créditos
