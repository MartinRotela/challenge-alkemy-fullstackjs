const Category = require('../models/category');
const Entry = require('../models/Entry');

const getCategories = async (req, res) => {
    const categories = await Category.findAll();

    res.json({
        categories,
    });
};

const getCategoryByIdAndHisEntries = async (req, res) => {
    const { id } = req.params;
    const { uid } = req.body;

    const category = await Category.findByPk(id, {
        include: { model: Entry, as: 'entries', where: { UserId: uid } },
    });

    res.json(category);
};

module.exports = { getCategories, getCategoryByIdAndHisEntries };
