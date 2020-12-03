const CurrencyPeriod = sequelize.define('CurrencyPeriod',require('./schema'),{
    freezeTableName: true,
    updatedAt: 'update_date',
    createdAt: 'insert_date',
});

CurrencyPeriod.associate = (models) =>{
    models.Currency.hasOne(CurrencyPeriod,{foreignKey: 'currency',}) // relationships
}

module.exports = CurrencyPeriod