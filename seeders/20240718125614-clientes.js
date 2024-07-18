'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('clientes', [
      {
        nombre: 'Juan',
        apellido: 'Perez',
        cedula: '1234567890',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Carlos',
        apellido: 'Gomez',
        cedula: '1122334455',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Ana',
        apellido: 'Lopez',
        cedula: '5566778899',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Luis',
        apellido: 'Fernandez',
        cedula: '2233445566',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Maria',
        apellido: 'Martinez',
        cedula: '0987654321',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('clientes', null, {});
  }
};
