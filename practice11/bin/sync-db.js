const models = require('../models');

module.exports = () => {
    // 기존에 DB가 존재하면 기존 DB 삭제 후 다시 만듦.
    const options = {
        force: process.env.NODE_ENV === 'test' ? true : false
    };
    return models.sequelize.sync(options);
}