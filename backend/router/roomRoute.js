const express = require('express');
const { getRoom, addRoom, updateRoom, deleteRoom } = require('../controller/roomController');
const router = express.Router();

router.get('/get', getRoom);
router.post('/add', addRoom);
router.put('/update/:id', updateRoom);
router.delete('/delete/:id', deleteRoom);

module.exports = router