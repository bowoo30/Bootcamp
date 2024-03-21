const asyncHandler = require('express-async-handler');
const {room} = require('../models');


const getRoom = asyncHandler(async(req,res)=>{
    try {
        const rooms = await room.findAll();
        res.status(200).json(rooms)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

const addRoom = asyncHandler(async(req,res)=>{
    const {roomName} = req.body;
     try {
        const rooms = await room.create({
            roomName
        })
        res.status(201).json({message: 'Room has been created'})
     } catch (error) {
        res.status(404).json({message: error.message})
     }
})

const deleteRoom = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.params;
        const rooms = await room.destroy({where:{id}})
        res.status(201).json('Room was deleted!')
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

const updateRoom = asyncHandler(async(req,res)=>{
    try {
        const {id} = req.params;
        const {roomName} = req.body;
        const rooms = await room.findOne({where:{id}})
        rooms.update({
            roomName: roomName
        })
        rooms.save()
        res.status(200).json('Room is success updated!')
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})

module.exports = {
    addRoom,
    deleteRoom,
    updateRoom,
    getRoom
}