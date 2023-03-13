'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('reservations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      client_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'clients',
          key:'id',
        },
      },
      date_checking: {
        type: Sequelize.DATE
      },
      date_checkout: {
        type: Sequelize.DATE
      },
      room_number: {
        type: Sequelize.INTEGER
      },
      number_people: {
        type: Sequelize.INTEGER
      },
      daily_rate: {
        type: Sequelize.DECIMAL(5,2)
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('reservations');
  }
};