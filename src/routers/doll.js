const express = require('express')
const Doll = require('../models/doll')
const router = new express.Router()

//Add a new doll
router.post('/dolls', async (req, res) => {
  const doll = new Doll(req.body)
  
  try {
    await doll.save()
    res.status(201).send(doll)
  } catch (e) {
    res.status(400).send(e)
  }
})

//Get all dolls
router.get('/dolls', async (req, res) => {
  try {
    const dolls = await Doll.find({})
    res.send(dolls)
  } catch (e) {
    res.status(404).send(e)
  }
})

//Get all sold dolls
router.get('/dolls/sold', async (req, res) => {
  try {
    const dolls = await Doll.find({ sold: true })
    res.send(dolls)
  } catch (e) {
    res.send(e)
  }
})

//Get all available dolls 
router.get('/dolls/notsold', async (req, res) => {
  try {
    const dolls = await Doll.find({ sold: false })
    res.send(dolls)
  } catch (e) {
    res.send(e)
  }
})

//Delete entry by id
router.delete('/dolls/:id', async (req, res) => {
  const doll = await Doll.findByIdAndDelete(req.params.id)

  try{
    if (!doll) {
      return res.status(404).send()
    }

    res.send()
  } catch (e) {
    res.status(500).send()
  }
})
module.exports = router