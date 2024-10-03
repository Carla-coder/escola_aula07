
# Tutorial para Iniciar um Projeto Backend com Prisma

Este tutorial descreve como configurar um projeto backend utilizando Prisma com um banco de dados MySQL, e integrando com um frontend para gerenciamento de Turmas e Atividades.

## Passos para Configuração

1. **Crie o diretório do projeto**

- Crie uma pasta para o projeto e abra-a no VSCode.

- No diretório do projeto, crie uma pasta chamada api.

2.  **Configuração Inicial no VSCode**

- Abra o terminal do VSCode.
- Navegue até o diretório api com o comando:

```bash
cd api
```

3. **Instale o Prisma**

- Instale o Prisma globalmente:

```bash
npm i -g prisma
```

4. **Inicialize o Projeto Node.js**

- Crie o arquivo package.json com o comando:

```bash
npm init
```

- Instale as dependências:

```bash
npm install
```

5. **Configure o Prisma**

- Inicialize o Prisma com MySQL como provedor de banco de dados:

```bash
prisma init --datasource-provider mysql
```

- No arquivo schema.prisma, configure o modelo do banco de dados como abaixo:

```prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model Professor {
  id        Int     @id @default(autoincrement())
  nome      String
  email     String  @unique
  senha     String
  turmas    Turma[]
}

model Turma {
  id        Int    @id @default(autoincrement())
  nome      String
  professorId Int
  professor   Professor @relation(fields: [professorId], references: [id])
  atividades  Atividade[]
}

model Atividade {
  id          Int    @id @default(autoincrement())
  descricao   String
  turmaId     Int
  turma       Turma   @relation(fields: [turmaId], references: [id])
}
```

6. **Configurar Variáveis de Ambiente**

- Crie o arquivo .env na raiz do projeto e adicione a URL do banco de dados:

```bash
DATABASE_URL="mysql://root:@localhost:3306/turmas_db"
```

7. **Instale Dependências do Backend**

- Instale as bibliotecas necessárias:

```bash
npm install cors express dotenv
```

8. **Migração e População do Banco de Dados**

- Execute as migrações e sincronize o banco de dados:

```bash
npx prisma migrate dev --name turmas_db init
```

- Popule o banco de dados:

```bash
npx prisma db seed
```

9. **Estrutura do Projeto**

- Crie a pasta src/controllers dentro do diretório api e adicione os arquivos turmas.js, atividade.js e professor.js.

- Fora da pasta controllers, crie o arquivo routes.js e o arquivo principal server.js no diretório raiz da api.

10. **Iniciar o Servidor**

- Para rodar o servidor, execute:
```bash
node server.js
```
- O servidor estará disponível na porta 3000.

11. **Frontend**

- Na pasta Front, crie os arquivos atividades.html, professor.html e turmas.html para rodar o frontend.

- Abra o arquivo professor.html no navegador utilizando o Live Server para testar a aplicação.


