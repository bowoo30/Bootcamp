'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({userbio,userhis}) {
      // define association here
      this.hasOne(userbio,{foreignKey:'userId'})
      this.hasOne(userhis,{foreignKey:'userId'})
    }
  }
  user_game.init({
    name: {
      type :DataTypes.STRING,
      allowNull:false
    },
    email: {
      type :DataTypes.STRING,
      allowNull:false
    },
    password: {
      type :DataTypes.STRING,
      allowNull:false
    },
    role: {
      type :DataTypes.STRING,
      allowNull:false
    },
    refreshToken: {
      type :DataTypes.STRING,
      allowNull:true
    },

  }, {
    sequelize,
    modelName: 'user_game',
    tableName: 'user_game'
  });
  return user_game;
};