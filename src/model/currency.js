const Sequelize = require('sequelize');

module.exports = `
    CURRENCIES(
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        NAME VARCHAR(50),
        SHORT_NAME VARCHAR(50),
        CONVERSION_RATE VARCHAR(50),
        SYMBOL VARCHAR(50),
        SORT_ORDER INTEGER,
        INSERT_DATE DATE,
        UPDATE_DATE DATE,
        SYSTEM_NOTES VARCHAR(50)
    )
`