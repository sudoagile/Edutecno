const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_m7_bootcamp', 'node', '123456', {
    host: 'localhost',
    dialect: 'postgres' 
  });
  
  module.exports = sequelize;



