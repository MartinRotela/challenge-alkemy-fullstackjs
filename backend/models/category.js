const { DataTypes } = require('sequelize');
const db = require('../database/connection');

const Category = db.define('Category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'Category name can not be empty' },
        },
    },
});

module.exports = Category;
