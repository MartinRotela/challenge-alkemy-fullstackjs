const { Router } = require('express');
const {
    getCategories,
    postCategory,
    getCategoryByIdAndHisEntries,
} = require('../controllers/category.controller');
const { validateJWT } = require('../middlewares/jwt-validate');

const router = Router();

router.get('/', [validateJWT], getCategories);
router.post('/', postCategory);
router.get('/:id', [validateJWT], getCategoryByIdAndHisEntries);

module.exports = router;
