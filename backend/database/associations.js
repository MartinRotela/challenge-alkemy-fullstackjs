const Category = require('../models/category');
const Entry = require('../models/Entry');
const User = require('../models/user');

Category.hasMany(Entry, { as: 'entries' });
Entry.belongsTo(Category, { as: 'categoryId' });

User.hasMany(Entry, { as: 'entries' });
Entry.belongsTo(User, { as: 'userId' });
