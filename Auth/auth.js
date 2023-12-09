import jwt from 'jsonwebtoken';

export function genearateToken(id){
    return jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: '15m' })
}