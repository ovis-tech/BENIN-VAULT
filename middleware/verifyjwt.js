const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
if (!authHeader || !authHeader.startsWith('Bearer ')) return res.status(401).json({ 'message': 'Unauthorized' });    console.log(authHeader);
    jwt.verify(
        authHeader.split(' ')[1],
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if (err) return res.status(403).json({ 'message': 'Forbidden' });
            req.user = decoded.userInfo.username;
            req.roles = decoded.userInfo.roles;
            next();
        }
    );
}

module.exports = verifyJWT;