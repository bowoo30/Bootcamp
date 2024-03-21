'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userhis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userhis.init({
    score: {
      type :DataTypes.BIGINT,
      allowNull:false
    },
    history_date: {
      type :DataTypes.DATEONLY,
      allowNull:false
    },
    userId: {
      type :DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'userhis',
    tableName: 'userhis',
  });
  return userhis;
};