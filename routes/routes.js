const express = require('express')
const router = express.Router()
const Model = require('../model/model')

//Post Method
router.post('/post',async(req,res) => {
    console.log(req.body);
    const data = new Model({
        nama: req.body.nama,
        email: req.body.email
    })
    try {
        const dataToSave = await data.save()
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({message : error.message})
    }
})

//Get all Method
router.get('/getAll',async (req,res) => {
    try {
        const data = await Model.find()
        res.json(data) 
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
router.get('/getOne/:id',async (req,res) => {
    try {
      const data = await Model.findById(req.params.id)
      res.json(data)
    } catch (error) {
      res.status(500).json({message: error.message})
    }
})

//Update by ID Method
router.patch('/update/:id',async (req,res) => {
    try {
        const id = req.params.id
        const updateData = req.body
        const options = { new: true }
        const result = await Model.findByIdAndUpdate(
            id,updateData,options
        )
        res.send(result)
    } catch (error) {
        res.status(400).json({message : error.message})
    }
})

//Delete by ID Method
router.delete('/delete/:id',async (req,res) => {
    try {
        const id = req.params.id
        const result = await Model.findByIdAndDelete( id )
        res.send(`Document with ${result.nama} has been deleted`)
    } catch (error) {
        res.status(400).json({message : error.message})
    }
})

module.exports = router