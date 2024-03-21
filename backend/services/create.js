const {sequelize} = require('../models')

const main = async()=>{
    await sequelize.sync()
}


module.exports = main