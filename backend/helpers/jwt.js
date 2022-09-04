const jwt = require('jsonwebtoken');

const JWTGen = (uid, name) => {
    return new Promise((resolve, reject) => {
        const payload = { uid, name };

        jwt.sign(
            payload,
            process.env.SECRETORPRIVATEKEY,
            {
                expiresIn: '2h',
            },
            (err, token) => {
                if (err) {
                    console.log(err);
                    reject('Token can not be created');
                }
                resolve(token);
            }
        );
    });
};

module.exports = {
    JWTGen,
};
