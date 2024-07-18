'use strict';

const { name } = require('ejs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('servicioclientes', {
      fields: ['cliente_id'],
      name: 'cliente_id_fk',
      type: 'foreign key',
      references: {
        table: 'clientes',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });

    await queryInterface.addConstraint('servicioclientes', {
      fields: ['servicio_id'],
      name: 'servicio_id_fk',
      type: 'foreign key',
      references: {
        table: 'servicios',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('servicioclientes', 'cliente_id_fk');
    await queryInterface.removeConstraint('servicioclientes', 'servicio_id_fk');
  }
};
