const models = require('../models');

module.exports = () => {
    // 기존에 DB가 존재하면 기존 DB 삭제 후 다시 만듦.
    return models.sequelize.sync({force: true});
}