import { QueryInterface } from 'sequelize';
import bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Juan Cassius Carneiro Pereira',
        email: 'cassjuan@hotmail.com',
        password: bcrypt.hashSync('senha123', SALT_ROUNDS),
      },
      {
        name: 'Ademilson',
        email: 'admin@admin.com',
        password: bcrypt.hashSync('admin', SALT_ROUNDS),
      },
    ]);
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('users', {});
  },
};
