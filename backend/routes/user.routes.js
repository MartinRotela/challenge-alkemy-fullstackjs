const { Router } = require('express');
const { check } = require('express-validator');
const {
    registerUser,
    deleteUser,
    loginUser,
} = require('../controllers/user.controller');
const fieldValidator = require('../middlewares/field-validator');

const router = Router();

router.delete('/:id', deleteUser);
router.post(
    '/new',
    [
        check('name', 'Name should be at least 3 characters').isLength({
            min: 3,
        }),
        check('email', 'Invalid email').isEmail(),
        check('password', 'Password should be at least 6 characters').isLength({
            min: 6,
        }),
        fieldValidator,
    ],
    registerUser
);

router.post(
    '/',
    [
        check('email', 'Invalid email').isEmail(),
        check('password', 'Password should be at least 6 characters').isLength({
            min: 6,
        }),
        fieldValidator,
    ],
    loginUser
);

module.exports = router;
