const express = require('express');
const router = express.Router({mergeParams: true});

const Nft = require('../models/Nft');
const User = require('../models/User');
const Collection = require('../models/Collection')

const data = require('../data/nft.json');

router.post('/drop', async (req, res) => {
    try {
        await Nft.deleteMany()
        await User.deleteMany()
        await Collection.deleteMany()
    }
    catch{
        res.status(500).send(false)
    }
    finally{
        res.status(200).send(true)
    }
})

router.post('/reload', async (req, res) => {
    try {
        await Nft.deleteMany()
        await Collection.deleteMany()
        await User.deleteMany()

        await Nft.insertMany(data.nft)
        await User.insertMany(data.user)
        await Collection.insertMany(data.collection)      

        await User.find().populate()
    }
    catch{
        res.status(500).send(false)
    }
    finally{
        res.status(200).send(true)
    }
})
   
   

module.exports = router;