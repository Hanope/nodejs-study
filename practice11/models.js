const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db.sqlite',
    logging: false
});

const User = sequelize.define('User', {
    name: {
        type: Sequelize.STRING,
        unique: true
    }
});

// User Model 생성
module.exports = {Sequelize, sequelize, User};