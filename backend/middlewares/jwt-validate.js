const jwt = require('jsonwebtoken');

const validateJWT = (req, res, next) => {
    //x-token headers

    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            msg: 'No token',
        });
    }

    try {
        const { uid, name } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        req.body.uid = uid;
        req.body.name = name;
    } catch (error) {
        return res.status(401).json({
            msg: 'Invalid token',
        });
    }

    next();
};

module.exports = {
    validateJWT,
};
