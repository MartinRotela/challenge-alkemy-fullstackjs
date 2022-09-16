const bcrypt = require('bcryptjs');
const { JWTGen } = require('../helpers/jwt');
const User = require('../models/user');

const registerUser = async (req, res) => {
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

        const newUser = await User.create(user);

        const token = await JWTGen(newUser.id, newUser.name);

        res.json({
            name: newUser.name,
            uid: newUser.id,
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'An unexpected error ocurred',
        });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email: email } });
        if (!user) {
            return res.status(400).json({
                msg: 'There is an error with the email or password',
            });
        }

        const validPassword = bcrypt.compareSync(password, user.password);

        if (!validPassword) {
            return res
                .status(400)
                .json({ msg: 'There is an error with the email or password' });
        }

        const token = await JWTGen(user.id, user.name);

        res.json({
            uid: user.id,
            name: user.name,
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'An unexpected error ocurred',
        });
    }
};

const deleteUser = async (req, res) => {
    const { uid } = req.body;

    try {
        const usuario = await User.findByPk(uid);

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

const renewUser = async (req, res) => {
    try {
        const { uid, name } = req.body;

        const token = await JWTGen(uid, name);

        res.json({ token, uid, name });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'An unexpected error ocurred',
        });
    }
};

module.exports = { registerUser, deleteUser, loginUser, renewUser };
