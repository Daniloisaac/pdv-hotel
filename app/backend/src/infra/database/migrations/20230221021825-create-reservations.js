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
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'clients',
          key:'id',
        },
      },
      data_checkin: {
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