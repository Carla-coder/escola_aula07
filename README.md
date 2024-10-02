
# Sistema de Gerenciamento de Professores, Turmas e Atividades

## Descrição

Este projeto é um sistema web para gerenciamento de professores, turmas e atividades utilizando Node.js, Express, MySQL e Prisma.

O sistema permite realizar operações CRUD (Criar, Ler, Atualizar e Deletar) para professores, turmas e atividades, além de autenticação de professores.

## Tecnologias Utilizadas

**Node.js:** Plataforma de desenvolvimento backend.

**Express:** Framework para Node.js.

**Prisma:** ORM (Object Relational Mapping) utilizado para interação com o banco de dados.

**MySQL:** Banco de dados utilizado.

**CORS:** Middleware para permitir requisições entre diferentes domínios.

**dotenv:** Para gerenciar variáveis de ambiente.

**bcrypt:** Para hash de senhas.

## Estrutura do Projeto

**Backend**

**server.js:** Arquivo principal que inicializa o servidor e configura as rotas da API.

**src/controllers:** Contém os controladores responsáveis pela lógica do CRUD de professores, turmas e atividades.

**src/routes:** Contém as rotas da aplicação.

**prisma/schema.prisma:** Define os modelos de dados para professores, turmas e atividades.

## Modelos do Banco de Dados

O projeto usa o Prisma ORM para modelagem dos dados, com as seguintes entidades:

## Professor

id: Chave primária.

nome: Nome do professor.

email: E-mail do professor.

senha: Senha (armazenada em hash).

Relacionamento: Um professor pode ter várias turmas.

## Turma

id: Chave primária.

nome: Nome da turma.

professorId: Chave estrangeira que referencia o professor.

## Atividade

id: Chave primária.

descricao: Descrição da atividade.

turmaId: Chave estrangeira que referencia a turma.

## Configuração do Ambiente

### Pré-requisitos:

 - Node.js instalado

 - MySQL instalado

 - Prisma instalado globalmente (npm install prisma -g)

 - Configurar um arquivo .env com a variável DATABASE_URL apontando para o banco de dados MySQL.




## Instalação

Siga os passos abaixo para configurar o projeto localmente:


1. **Clone o repositório**:

    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```

2. **Instale as dependências**:

    ```bash
    npm install
    ```

3. **Configure o banco de dados**:

    Configure o arquivo `.env` com as credenciais do seu banco de dados e, em seguida, execute o comando abaixo para gerar as migrações e sincronizar o banco de dados:

    ```bash
    npx prisma migrate dev --name init
    ```

4. **Popule o banco de dados**:

    Execute o comando para popular o banco de dados com os dados iniciais:

    ```bash
    npx prisma db seed
    ```

5. **Inicie o servidor**:

    Finalmente, execute o servidor com o seguinte comando:

    ```bash
    node server.js
    ```

Agora o projeto estará rodando em `http://localhost:3000`.

## Rotas da API

- **Professores**


POST /api/professores: Cria um novo professor.

GET /api/professores: Retorna todos os professores.

GET /api/professores/:id: Retorna um professor específico.

PUT /api/professores/:id: Atualiza os dados de um professor.

DELETE /api/professores/:id: Exclui um professor.

POST /api/professores/login: Realiza o login de um professor.


- **Turmas**


POST /api/turmas: Cria uma nova turma.

GET /api/turmas: Retorna todas as turmas.

GET /api/turmas/:id: Retorna uma turma específica.

PUT /api/turmas/:id: Atualiza os dados de uma turma.

DELETE /api/turmas/:id: Exclui uma turma.


- **Atividades**


POST /api/atividades: Cria uma nova atividade.

GET /api/atividades: Retorna todas as atividades.

GET /api/atividades/:id: Retorna uma atividade específica.

PUT /api/atividades/:id: Atualiza os dados de uma atividade.

DELETE /api/atividades/:id: Exclui uma atividade.


# Front-end


## Funcionalidades

- **Login de Professor**: O professor pode acessar o sistema inserindo seu e-mail e senha.

- **Gerenciamento de Turmas**: Após o login, o professor pode visualizar suas turmas cadastradas, cadastrar novas turmas, e excluir as existentes.

- **Gerenciamento de Atividades**: Para cada turma, o professor pode visualizar as atividades associadas, cadastrar novas atividades e excluir atividades.

## Tecnologias Utilizadas

- **Frontend**: HTML, CSS, JavaScript

- **Ferramentas de Desenvolvimento**: Visual Studio Code

# Estrutura do Projeto


O frontend é composto por três páginas principais:

### 1. Tela de Login (`login.html`)

Esta tela é responsável por autenticar o professor no sistema.

### 2. Tela de Turmas (turmas.html)

Esta página exibe todas as turmas registradas pelo professor e permite o gerenciamento (cadastro e exclusão) das mesmas.

### 3. Tela de Atividades (atividades.html)

Esta página lista as atividades de uma turma específica e permite o gerenciamento (cadastro e exclusão) das atividades.

## Como Usar

- Acesse a tela de login abrindo o LiveServer pelo VsCode.

- Faça login utilizando as credenciais de professor.

- Gerencie suas turmas e atividades a partir do painel principal.
## Autores

- [@octokatherine](https://www.github.com/Carla-coder)

