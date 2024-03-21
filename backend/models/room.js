'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  room.init({
    roomName: {
      type :DataTypes.STRING,
      allowNull:false
    },
    usedRoom: {
      type :DataTypes.DATEONLY,
      allowNull:true
    }
  }, {
    sequelize,
    modelName: 'room',
    tableName: 'room'
  });
  return room;
};