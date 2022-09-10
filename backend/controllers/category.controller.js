const Category = require('../models/category');
const Entry = require('../models/Entry');

const getCategories = async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.json({
            categories,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'An unexpected error ocurred' });
    }
};

const getCategoryByIdAndHisEntries = async (req, res) => {
    try {
        const { id } = req.params;
        const { uid } = req.body;

        const category = await Category.findByPk(id, {
            include: { model: Entry, as: 'entries', where: { UserId: uid } },
        });

        if (!category) {
            return res.status(404).json({ msg: 'Category not found' });
        }

        res.json(category);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'An unexpected error ocurred' });
    }
};

module.exports = { getCategories, getCategoryByIdAndHisEntries };
