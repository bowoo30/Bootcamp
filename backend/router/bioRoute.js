const express = require('express')
const { route } = require('./userRoute')
const { addBioPlayer, getBioSingle, updateBioPlayer, deleteBioPlayer } = require('../controller/bioController')
const router = express.Router()

router.get('/', getBioSingle)
router.post('/', addBioPlayer)
router.put('/:id', updateBioPlayer)
router.delete('/:id', deleteBioPlayer)


module.exports = router