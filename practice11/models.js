const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite'
});

const User = sequelize.define('User', {
    name: Sequelize.STRING
});

// User Model 생성
module.exports = {Sequelize, sequelize, User};