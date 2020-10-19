'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },


      // new fields
      username: {
        type: Sequelize.STRING
      },
      normalised_username: {
        type: Sequelize.STRING
      },
      normalised_email: {
        type: Sequelize.STRING
      },
      password_hash: {
        type: Sequelize.STRING
      },
      security_stamp: {
        type: Sequelize.STRING
      },
      concurrency_stamp: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      phone_number_confirmed: {
        type: Sequelize.BOOLEAN,
        default: false
      },
      two_factor_enabled: {
        type: Sequelize.BOOLEAN
      },
      lockoutend: {
        type: Sequelize.BOOLEAN
      },
      lockoutend_enabled: {
        type: Sequelize.BOOLEAN
      },
      access_fail_count: {
        type: Sequelize.INTEGER
      },
      primary_role: {
        type: Sequelize.BOOLEAN
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },

      // end new fields


      hashedPassword: {type: Sequelize.STRING},
      salt: {type: Sequelize.STRING},
      isDeleted: { type: Sequelize.BOOLEAN, default: false },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
