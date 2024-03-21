const {user_game} = require('../models')
const asyncHandler = require('express-async-handler')
const bcrypt = require('bcrypt')
const { accessToken } = require('../config/accessToken')
const { refreshToken } = require('../config/refreshToken')


// get users
const getUsers = asyncHandler(async(req,res)=>{
    try {
        const users = await user_game.findAll();
        res.json(users)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

// get by ID
const getById = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.params;
        const user = await user_game.findOne({where: {id}});
        res.json(user)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
})

// Register user
const Register = asyncHandler(async(req,res)=>{
    const {name, email, password, role} = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password,10)
        const user = await user_game.create({
            name,
            email,
            password: hashedPassword,
            role
        })
        res.status(201).json({message: 'Register Berhasil'})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

// Login
const login = asyncHandler(async(req,res)=>{
    try {
         const {email,password} = req.body;
         const user = await user_game.findOne({where:{email:email}})
         if(user && (await bcrypt.compare(password,user.password))){
             req.user = user;
             const access_Token = await accessToken(user?.id)
             const refresh_Token = await refreshToken(user?.id)
             await user.update({
                 refreshToken: refresh_Token
             })
             user.save();
             res.cookie('refreshToken',refresh_Token,{
                 httpOnly: true,
                 maxAge: 24 * 60 * 60 * 1000
             })
             res.json({access_Token})
            }
    } catch (error) {
        res.status(404).json({msg: 'Email or password isn valid'})
    }
})

// logout
const logout = asyncHandler(async(req,res)=>{
    try {
        const refresh_Token = req.cookies.refreshToken.split(' ')[0];

        // if(!refresh_Token) return res.status(204)
        
        // res.json(refresh_Token)
        const user = await user_game.findOne({
            where : {
                refreshToken: refresh_Token
            }
        })
        user.update({refreshToken: null})
        user.save()
        res.clearCookie('refreshToken')
        return res.sendStatus(200)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

// update user
const updateUser = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.params;
        const {name,email,role} = req.body;
        const user = await user_game.findOne({where:{id}})
        user.update({
            name: name,
            email: email,
            role: role
        })
        user.save()
        res.status(200).json(user)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

// delete user
const deleteUser = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.params;
        const user = await user_game.destroy({where:{id}})
        res.status(200).json('Delete is successfully')
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

module.exports = {
    getUsers,
    getById,
    Register,
    updateUser,
    deleteUser,
    login,
    logout
}