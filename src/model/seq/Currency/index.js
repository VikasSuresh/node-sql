const Currency = sequelize.define('Currency',require('./schema'),{
    freezeTableName: true,
    updatedAt: 'update_date',
    createdAt: 'insert_date',
});

module.exports = Currency