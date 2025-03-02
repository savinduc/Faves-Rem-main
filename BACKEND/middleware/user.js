const jwt = require('jsonwebtoken');
const authMiddleware = (req, res, next) => {
    const token = req.header('x-auth-token');
      
        if (!token) {
            console.log('No token, authorization denied');
            return res.status(401).json({ msg: 'No token, authorization denied' });
          
        }
      
        try {
          const decoded = jwt.verify(token, process.env.JWT_SECRET);
          req.user = decoded.user;
          next();
        } catch (error) {
          return res.status(401).json({ msg: 'Token is not valid' });
        }
};

module.exports = authMiddleware;