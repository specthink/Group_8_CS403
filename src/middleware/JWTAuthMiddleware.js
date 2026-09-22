const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(!token){
        return res.status(401).json({
            error: "Access Denied: Authorization Bearer Token Missing"
        });
    };

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err,decoded) => {
        if(err){
            return res.status(403).json({
                error: "Forbidden: Token has expired or invalid"
            });;
        };
        req.userId = decoded.userId;
        next();
    });
};

module.exports = authenticateToken;