'use strict';

const cliente = require('../models/cliente');

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

    let [clientes, clientes_metadata] = await queryInterface.sequelize.query('SELECT id FROM clientes;');
    let [servicios, servicios_metadata] = await queryInterface.sequelize.query('SELECT id FROM servicios;');

    await queryInterface.bulkInsert('servicioclientes', [
      { cliente_id: clientes[0].id, servicio_id: servicios[0].id, createdAt: new Date(), updatedAt: new Date() },
      { cliente_id: clientes[1].id, servicio_id: servicios[1].id, createdAt: new Date(), updatedAt: new Date() },
      { cliente_id: clientes[2].id, servicio_id: servicios[2].id, createdAt: new Date(), updatedAt: new Date() },
      { cliente_id: clientes[3].id, servicio_id: servicios[3].id, createdAt: new Date(), updatedAt: new Date() },
      { cliente_id: clientes[4].id, servicio_id: servicios[4].id, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('servicioclientes', null, {});
  }
};
