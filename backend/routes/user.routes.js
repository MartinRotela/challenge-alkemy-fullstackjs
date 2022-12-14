const { Router } = require('express');
const { check } = require('express-validator');
const {
    registerUser,
    deleteUser,
    loginUser,
    renewUser,
} = require('../controllers/user.controller');
const fieldValidator = require('../middlewares/field-validator');
const { validateJWT } = require('../middlewares/jwt-validate');

const router = Router();

router.delete('/', [validateJWT], deleteUser);
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

router.get('/renew', [validateJWT], renewUser);

module.exports = router;
