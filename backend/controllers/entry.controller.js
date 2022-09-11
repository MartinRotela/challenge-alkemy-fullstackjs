const Entry = require('../models/Entry');

const getEntries = async (req, res) => {
    try {
        const { uid } = req.body;
        const entries = await Entry.findAll({ where: { UserId: uid } });

        res.json({
            entries,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'An unexpected error ocurred' });
    }
};

const newEntry = async (req, res) => {
    try {
        const { description, amount, type, CategoryId, uid: UserId } = req.body;

        const newEntry = await Entry.create({
            description,
            amount,
            type,
            CategoryId,
            UserId,
        });

        res.json({ newEntry });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'An unexpected error ocurred' });
    }
};

const putEntry = async (req, res) => {
    try {
        const { description, amount, CategoryId } = req.body;

        const { id } = req.params;

        const entry = await Entry.findByPk(id);

        if (!entry) {
            res.status(404).json({
                msg: 'Entry not found',
            });
        }

        await entry.update({
            description,
            amount,
            CategoryId,
        });

        res.json(entry);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'An unexpected error ocurred' });
    }
};

const deleteEntry = async (req, res) => {
    try {
        const { id } = req.params;

        const entry = await Entry.findByPk(id);

        if (!entry) {
            res.status(404).json({
                msg: 'Entry not found',
            });
        }

        await entry.destroy();

        res.json({ msg: 'Entry deleted successfuly' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'An unexpected error ocurred' });
    }
};

const getBalance = async (req, res) => {
    try {
        const { uid } = req.body;

        const expenses = await Entry.sum('amount', {
            where: { UserId: uid, type: 'expense' },
        });
        const incomes = await Entry.sum('amount', {
            where: { UserId: uid, type: 'income' },
        });

        const balance = incomes - expenses;

        res.json({ balance });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'An unexpected error ocurred' });
    }
};

module.exports = { getEntries, newEntry, getBalance, putEntry, deleteEntry };
