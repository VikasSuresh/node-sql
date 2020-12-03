const { DataTypes } = require('sequelize');

module.exports = {
    currency: { 
        type: DataTypes.STRING(10),
        primaryKey: true,
        allowNull: false,
    },
    period: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        allowNull: false,
    },
    conversion_rate: {
        type: DataTypes.DECIMAL(18,6),
    },
    hub_sync_date: {
        type: DataTypes.DATE,
    }, 
    src_sync_date: {
        type: DataTypes.DATE,
    },
    system_notes: {
        type: DataTypes.STRING,
    },
    hub_ref_id: {
        type: DataTypes.UUID,
    }
}