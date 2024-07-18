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
    await queryInterface.bulkInsert('servicios', [
      {
        descripcion: 'Corte de cabello',
        precio: 10.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Manicure',
        precio: 5.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Pedicure',
        precio: 8.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Barba',
        precio: 7.00,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descripcion: 'Tinte de cabello',
        precio: 15.00,
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
    await queryInterface.bulkDelete('servicios', null, {});
  }
};
