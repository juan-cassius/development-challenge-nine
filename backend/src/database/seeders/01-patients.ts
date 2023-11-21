import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'patients',
      [
        {
          fullName: 'Juan Cassius Carneiro Pereira',
          birthDate: '1997-01-03',
          email: 'cassjuan@hotmail.com',
        },
        {
          fullName: 'Fulano Pereira',
          birthDate: '1992-01-02',
          email: 'maria@gmail.com',
        },
        {
          fullName: 'Pedro da Silva',
          birthDate: '2000-10-04',
          email: 'pedropedroso@gbol.com',
        },
        {
          fullName: 'Pedro Pedrosa',
          birthDate: '2000-10-04',
          email: 'pedropedra@gbol.com',
        },
        {
          fullName: 'Maria da Silva',
          birthDate: '1995-01-03',
          email: 'mariasilva@gbol.com',
        },
        {
          fullName: 'João Joãozinho',
          birthDate: '1990-05-15',
          email: 'joaojoaozinho@gbol.com',
        },
        {
          fullName: 'Aline Pereira',
          birthDate: '1992-01-02',
          email: 'aline@gmail.com',
        },
        {
          fullName: 'Arthur da Silva',
          birthDate: '2000-10-04',
          email: 'arthur@gbol.com',
        },
        {
          fullName: 'Alice Pedrosa',
          birthDate: '2000-10-04',
          email: 'alice@gbol.com',
        },
        {
          fullName: 'Amanda Silva',
          birthDate: '1995-01-03',
          email: 'amanda@gbol.com',
        },
        {
          fullName: 'Alex Joãozinho',
          birthDate: '1990-05-15',
          email: 'alex@gbol.com',
        },
        {
          fullName: 'Ana Aninha',
          birthDate: '1998-07-20',
          email: 'ana@gbol.com',
        },
        {
          fullName: 'Andre Carlitos',
          birthDate: '1985-02-28',
          email: 'andre@gbol.com',
        },
        {
          fullName: 'Angela Joaninha',
          birthDate: '1992-01-02',
          email: 'angela@gbol.com',
        },
        {
          fullName: 'Antonio Pedroso',
          birthDate: '2000-10-04',
          email: 'antonio@gmail.com',
        },
        {
          fullName: 'Carlos Carlitos',
          birthDate: '1985-02-28',
          email: 'carloscarlitos@gbol.com',
        },
        {
          fullName: 'Joana Joaninha',
          birthDate: '1992-01-02',
          email: 'joaniha@gbol.com',
        },
        {
          fullName: 'Pedro Pedroso',
          birthDate: '2000-10-04',
          email: 'pedroca@gmail.com',
        },
      ],

      {},
    );
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('patients', {});
  },
};
