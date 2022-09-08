const { DataTypes } = require('sequelize');
const db = require('../database/connection');

const Entry = db.define('Entry', {
    description: {
        type: DataTypes.STRING,
    },
    amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
            notNull: { msg: 'Amount can not be empty' },
        },
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'Type can not be empty' },
        },
    },
});

module.exports = Entry;
