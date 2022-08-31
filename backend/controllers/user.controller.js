const bcrypt = require('bcryptjs');
const User = require('../models/users');

const postUser = async (req, res) => {
    const { body } = req;
    try {
        const existeEmail = await User.findOne({
            where: {
                email: body.email,
            },
        });

        if (existeEmail) {
            return res.status(400).json({
                msg: 'Email already taken',
            });
        }

        const user = { ...req.body };
        const salt = bcrypt.genSaltSync();

        user.password = bcrypt.hashSync(body.password, salt);

        await User.create(user);

        res.json({
            msg: 'User created succesfully',
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'An unexpected error ocurred',
        });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await User.findByPk(id);

        if (!usuario) {
            return res.status(404).json({
                msg: 'User does not exist',
            });
        }

        await usuario.destroy();
        res.json({
            msg: 'User deleted succesfully',
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'An unexpected error ocurred',
        });
    }
};

module.exports = { postUser, deleteUser };
