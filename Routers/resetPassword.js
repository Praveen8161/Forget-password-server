import express from 'express';
import jwt from 'jsonwebtoken';
import { getUserByToken } from '../controller/user.js';

const router = express.Router();

// middleware verify user
const verifyUser = async (req, res, next) => {
    try{
        const { id, token } = req.params ;

        // check user
        const user = await getUserByToken(token);
        if(!user) return res.status(400).json({data: 'link invalid or expired', acknowledged: false})

        // JWT verify
        const jwtVerify = jwt.verify( token , process.env.SECRET_KEY );

        // attach user
        req.user = user;

        next();

    }catch(err){
        if(err.name === 'TokenExpiredError'){
            res.status(500).json({
                error: 'Token expired', message: 'create another token for password reset'
            });
        }else{
            res.status(500).json({error: 'Internal Server Error', message:err});
        }
    }
}

// to reset page
router.get('/:id/:token', verifyUser, async (req, res) => {
    try{
        
        res.status(200).json({data: 'verified user', acknowledged: true});

    }catch(err){
        res.status(500).json({error: 'Internal Server Error', message:err});
    }
});

// update new password
router.patch('/:id/:token', verifyUser, async (req, res) => {
    try{

        user.token = '' ;
        user.password = req.body.newPassword ;
        await user.save() ;

        res.status(200).json({data: 'new password updated', acknowledged: true});

    }catch(err){
        res.status(500).json({error: 'Internal Server Error', message:err});
    }
});

export const resetRouter = router;
