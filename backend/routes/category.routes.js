const { Router } = require('express');
const {
    getCategories,
    getCategoryByIdAndHisEntries,
} = require('../controllers/category.controller');
const { validateJWT } = require('../middlewares/jwt-validate');

const router = Router();

router.get('/', [validateJWT], getCategories);
router.get('/:id', [validateJWT], getCategoryByIdAndHisEntries);

module.exports = router;
