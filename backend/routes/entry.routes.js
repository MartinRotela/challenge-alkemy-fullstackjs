const { Router } = require('express');
const {
    getEntries,
    newEntry,
    getBalance,
    putEntry,
    deleteEntry,
} = require('../controllers/entry.controller');
const { validateJWT } = require('../middlewares/jwt-validate');

const router = Router();

router.use(validateJWT);

router.get('/balance', getBalance);
router.get('/', getEntries);
router.post('/new', newEntry);
router.put('/:id', putEntry);
router.delete('/:id', deleteEntry);

module.exports = router;
