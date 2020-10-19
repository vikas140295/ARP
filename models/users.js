'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    // bussiness_name:DataTypes.STRING,
    // bussiness_address:DataTypes.STRING,
    // ABN:DataTypes.STRING,


    username: {
      type: String,
      required: true
    },
    normalised_username: {
      type: String
    },
    normalised_email: {
      type: String
    },
    security_stamp: {
      type: String
    },
    concurrency_stamp: {
      type: String
    },
    phone_number: {
      type: String,
      required: true
    },
    phone_number_confirmed: {
      type: Boolean,
      default: false
    },
    two_factor_enabled: {
      type: Boolean
    },
    lockoutend: {
      type: Boolean
    },
    lockoutend_enabled: {
      type: Boolean
    },
    access_fail_count: {
      type: Number
    },


    primary_role: {
      type: Boolean,
      required: true
    },


    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    // created_date: {
    //   type: Date,
    //   default: Date.now
    // },
    // updated_date: {
    //   type: Date,
    //   default: Date.now
    // },

    // end new fields


    hashedPassword:DataTypes.STRING,
      salt: DataTypes.STRING,
      isDeleted: { type: DataTypes.BOOLEAN, defaultValue: false },
      
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};
