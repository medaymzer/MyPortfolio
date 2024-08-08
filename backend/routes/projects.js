const express = require('express')
const Project1 = require('../models/project')
const router = express.Router()

router.get('/',async (req,res)=>{
const projects = await Project1.find({})
res.json(projects)
})

router.get('/:id',async (req, res) => {
    const {id}=req.params
    try {
        const item = await Project1.findById(id);
        if (!item) return res.status(404).send('Item not found');
        res.send(item);
    } catch (err) {
        res.status(500).send(err);
    }
})

router.post ('/',async (req,res)=>{
    const {title , description , screenshot} = req.body
    try {
        const project = await Project.create({title,description,screenshot})
    } catch (error) {
        res.json(error)
    }

})

module.exports=router