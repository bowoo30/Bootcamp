const jwt = require('jsonwebtoken')
const asyncHAndler = require('express-async-handler');
const {user_game} = require('../models');
const { accessToken } = require('../config/accessToken');


const authMiddlerware = asyncHAndler(async(req,res,next)=>{
    let token;
    if(req?.headers?.authorization?.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1]
        try {
            if(token){
                const decoded = jwt.verify(token, process.env.JWT_SECRET)
                // const user = await user_game.findOne({where: decoded?.id});
                // req.user = user;
                next()
            }
        } catch (error) {
            throw new Error('Not Authorized token expired!, Please Login again!')
        }
    } else {
        throw new Error('There is no token attached to header')
    }
})

const isAdmin = asyncHAndler(async(req,res,next)=>{
    const {email} = req.user;
    const adminUser = await user_game.findOne({email})
    if(adminUser.role == "user"){
        // console.log(adminUser);
        throw new Error('You are not an admin')
    } else {
        next()
    }
})



module.exports = {authMiddlerware, isAdmin}