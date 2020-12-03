const { DataTypes } = require('sequelize');

module.exports = {
    short_name: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
    },
    conversion_rate: {
        type: DataTypes.DECIMAL(18,6),
    },
    symbol: {
        type: DataTypes.STRING(10),
    },
    sort_order: {
        type: DataTypes.INTEGER,
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