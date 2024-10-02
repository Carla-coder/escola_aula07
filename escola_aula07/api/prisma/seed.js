const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.professor.createMany({
    data: [
      { nome: 'Carlos Silva', email: 'carlossilva@example.com', senha: 'senha123' },
      { nome: 'Juliana Ramos', email: 'juramos@example.com', senha: 'senha456' },
      { nome: 'Luiz Correia', email: 'lcorreia@example.com', senha: 'senha789' },
    ],
  });

  await prisma.turma.createMany({
    data: [
      { nome: '1Des', professorId: 1 },
      { nome: '2Des', professorId: 2 },
      { nome: '3Des', professorId: 3 },
    ],
  });

  await prisma.atividade.createMany({
    data: [
      { descricao: 'Prova de Lógica', turmaId: 1 },
      { descricao: 'Trabalho de Banco de Dados Relacional', turmaId: 2 },
      { descricao: 'Apresentação pré-projeto', turmaId: 3 },
    ],
  });
}

main()
  .then(() => console.log('Seed completed'))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });