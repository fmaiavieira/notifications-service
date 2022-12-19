# Microserviço de notificações

Projeto para gerenciar notificações de um usuário dentro de uma aplicação.

## 🚀 Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 🔧 Instalação

Clone este repositório em sua máquina, navegue para pasta `notifications-service` e rode o seguinte comando no terminal:

```
npm install
```

Em seguida rode o comando:

```
npm start dev
```

O sistema estará ativo em http://localhost:3000/. Você pode utilizar um API Client como [postman](https://www.postman.com/) ou [insominia](https://insomnia.rest/download) para testar as rotas do microserviço.

Caso deseje visualizar o banco de dados, rode o seguinte comando:

```
npx prisma studio
```

## ⚙️ Executando os testes

Para executar os testes únitarios, rode o comando:

```
npm run test:watch
```

Os testes serão exibidos no terminal.

## 🛠️ Construído com

- [NestJS](https://docs.nestjs.com/) - O framework utilizado
- [TypeScript](https://www.typescriptlang.org/docs/) - A linguagem utilizada
- [NPM](https://docs.npmjs.com/) - Gerenciador de pacotes utilizado
- [Prisma](https://www.prisma.io/docs) - ORM de banco de dados
- [Jest](https://jestjs.io/pt-BR/docs/getting-started) - framework de testes
