const { validationResult } = require('express-validator');

const fieldValidator = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const [err] = errors.array({ onlyFirstError: true });
        const { msg } = err;
        return res.status(400).json({
            msg,
        });
    }

    next();
};

module.exports = fieldValidator;
