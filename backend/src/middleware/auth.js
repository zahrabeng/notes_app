import jwt from 'jsonwebtoken';

export const auth = (req, res, next) => {
    let token = req.header('token');
    jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
        if (err) {
            res.json({ message: "invalid token", err })
        }
        else {
            next();
        }
    })
}