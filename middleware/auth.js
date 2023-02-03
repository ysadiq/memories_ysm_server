import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    if (!req.headers.authorization) return next(new Error('Authorization header is missing'));
    
    try {
        const token = req.headers.authorization.split(" ")[1];
        
        // 3rd party token is > 500
        const isCustomAuth = token.length < 500;

        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, process.env.JWT_SECRET_KEY);

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }

        next();
    } catch (error) {
        next(error);
    }
}

export default auth;