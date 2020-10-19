'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orderDetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderId: { type: Sequelize.INTEGER },
    prodductId: { type: Sequelize.INTEGER },
    orderNumber: {
      type: Sequelize.STRING
    },
    price: { type: Sequelize.INTEGER },
    quantity: { type: Sequelize.INTEGER },
    discount: { type: Sequelize.INTEGER },
    total: {type: Sequelize.INTEGER },
    isDeleted:{type: Sequelize.BOOLEAN,
      defaultValue: false},
      title: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },


      // newly added
      productId:  { type: Sequelize.INTEGER },
      actualPrice:  { type: Sequelize.INTEGER },
      sellingPrice:  { type: Sequelize.INTEGER }


    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('orderDetails');
  }
};
