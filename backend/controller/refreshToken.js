const asyncHandler = require('express-async-handler')
const {user_game} = require('../models')
const { accessToken } = require('../config/accessToken')
const jwt = require('jsonwebtoken')

const tokenRefresh = asyncHandler(async(req,res)=>{
    try {
        const token = req.cookies.refreshToken;
        const user = await user_game.findOne({
            where: {
                refreshToken: token
            }
        })
        const verify = jwt.verify(token, process.env.REFRESH_TOKEN,(error,decoded)=>{
            if(error) return res.sendStatus(403);
            const id = user.id
            const access_Token = accessToken(id)
            res.json({access_Token})
        })

    } catch (error) {
        res.status(404).json({message: error.message})
    }
})
module.exports = {tokenRefresh}