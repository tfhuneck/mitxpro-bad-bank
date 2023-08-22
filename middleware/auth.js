const admin   = require('../admin.js');

// Verify token via admin.js using Firebase service 
async function verifyToken(req, res, next) {
    const token = req.headers.authorization;

    if (token) {
        admin.auth().verifyIdToken(token)
            .then(decodedToken => {
                console.log("Decoded Token: ", decodedToken);
                return next();
            }).catch(err => {
                return res.status(401).send('Unauthorized');
            })
    }
    else {
        return res.status(401).send('No token found');
    }
}

module.exports = verifyToken;