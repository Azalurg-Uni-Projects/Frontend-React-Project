const express = require('express');
const router = express.Router({mergeParams: true});

const Nft = require('../models/Nft');
const Users = require('../models/User');
const Collection = require('../models/Collection')


router.get('/', async (req, res) => {
  
  Collection
    .find()
    .then(ans => res.json(ans))
    .catch(err => res.status(500).json(err));
});

router.get('/:id', async (req, res) => {
  const id = req.params.id

  Collection
    .findById(id)
    .then(ans => res.json(ans))
    .catch(err => res.status(500).json(err))
});

router.post('/:author_id', async (req, res) => {
  const id = req.params.author_id
  const today = new Date()

  const collection = new Collection({
    author_id: id,
    created_date: today,
    nft_id: [],

    name: req.body.name,
    img_url: req.body.img_url,
    url: req.body.url
  })

  collection
    .save()
    .then(ans => res.json(ans))
    .catch(err => res.status(500).json(err))

  Users
    .findByIdAndUpdate(id, {'$addToSet': {created_collection_id: collection.id}})
    .catch(err => res.status(500).json(err))
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  
  Collection
    .findByIdAndDelete(id)
    .then(ans =>  res.json(ans))
    .catch(err => res.status(500).json(err))

  
});




module.exports = router;
