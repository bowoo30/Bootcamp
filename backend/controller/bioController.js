const asyncHandler = require('express-async-handler')
const {userbio} = require('../models');


const getBioSingle = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.params;
        const get = await userbio.findOne({where:{id}})
        res.status(200).json(get)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

const addBioPlayer = asyncHandler(async(req,res)=>{
    try {
        const {username,phoneNumber,gender,religion,city,date_of_birth,userId} = req.body
        const bio = await userbio.create({
            username,
            phoneNumber,
            gender,
            religion,
            city,
            date_of_birth,
            userId
        })
        res.status(200).json(bio)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

const updateBioPlayer = asyncHandler(async(req,res)=>{
    const {id} = req.params;
    const {username,phoneNumber,gender,religion,city,date_of_birth} = req.body
    try {
        const user = await userbio.findOne({where:{id}}) 
        user.update({
            username: username,
            phoneNumber: phoneNumber,
            gender: gender,
            religion: religion,
            city: city,
            date_of_birth: date_of_birth
        })
        user.save();
        res.status(200).json('Update is successfully')
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

const deleteBioPlayer = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.params;
        const bio = await userbio.destroy({where:{id}})
        res.status(200).json('Delete is successfully')
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

module.exports = {
    addBioPlayer,
    updateBioPlayer,
    deleteBioPlayer,
    getBioSingle
}