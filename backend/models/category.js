const { DataTypes } = require('sequelize');
const db = require('../database/connection');

const Category = db.define('Category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: { msg: 'This category already exists' },
        validate: {
            notNull: { msg: 'Category name can not be empty' },
        },
    },
});

module.exports = Category;
