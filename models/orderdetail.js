'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class orderDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Order, {
        foreignKey: "orderId",
        onDelete: "cascade"
      })
    }
  };
  orderDetail.init({
    title: DataTypes.STRING,
    orderId:  DataTypes.INTEGER,
    prodductId:  DataTypes.INTEGER,
    orderNumber: DataTypes.STRING,
    price:  DataTypes.INTEGER,
    quantity:  DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    total:  DataTypes.INTEGER,
    isDeleted:{type:DataTypes.BOOLEAN,defaultValue: false},

    // new added
    productId:  DataTypes.INTEGER,
    actualPrice:  DataTypes.INTEGER,
    sellingPrice:  DataTypes.INTEGER


  }, {
    sequelize,
    modelName: 'OrderDetail',
  });
  return orderDetail;
};
