'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userbio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userbio.init({
    username: {
      type :DataTypes.STRING,
      allowNull:false
    },
    phoneNumber: {
      type :DataTypes.STRING,
      allowNull:false
    },
    gender: {
      type :DataTypes.STRING,
      allowNull:false
    },
    religion: {
      type :DataTypes.STRING,
      allowNull:false
    },
    city: {
      type :DataTypes.STRING,
      allowNull:false
    },
    date_of_birth: {
      type :DataTypes.DATE,
      allowNull:false
    },
    userId: {
      type :DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'userbio',
    tableName: 'userbio',
  });
  return userbio;
};