const { DataTypes } = require('sequelize');
const db = require('../database/connection');
const Category = require('./category');
const User = require('./user');

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
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        },
        validate: {
            notNull: { msg: 'User is required' },
        },
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Category,
            key: 'id',
        },
        validate: {
            notNull: { msg: 'Category is required' },
        },
    },
});

module.exports = Entry;
