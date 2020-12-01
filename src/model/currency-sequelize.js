const Sequelize = require('sequelize');

module.exports = {
    name: {
        type: Sequelize.STRING,
    },
    short_name: {
        type: Sequelize.STRING,
    },
    conversion_rate: {
        type: Sequelize.STRING,
    },
    symbol: {
        type: Sequelize.STRING,
    },
    sort_order: {
        type: Sequelize.INTEGER,
    },
    insert_date: {
        type: Sequelize.DATE,
    },
    update_date: {
        type: Sequelize.DATE,
    },
    system_notes: {
        type: Sequelize.STRING,
    },
}