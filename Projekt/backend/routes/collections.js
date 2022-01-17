const express = require('express');
const router = express.Router({mergeParams: true});

const Collection = require('../models/Collection')

router.get('/', async (req, res) => {
  
  Collection
    .find()
    .then(ans => res.json(ans))
    .catch(err => res.status(500).json(err));
});

router.get('/:collection_id', async (req, res) => {
  const id = req.params.collection_id

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
    name: req.body.name,
    img_url: req.body.img_url,
    url: req.body.url
  })

  collection
    .save()
    .then(ans => res.status(200).json(ans))
    .catch(err => res.status(500).json(err))
});

router.delete('/:collection_id', async (req, res) => {
  const id = req.params.collection_id;
  
  Collection
    .findByIdAndDelete(id)
    .then(ans =>  res.json(ans))
    .catch(err => res.status(500).json(err))
});

router.put('/:collection_id', async (req, res) => {
  const id = req.params.collection_id;

  Nft
    .findByIdAndUpdate(id, {...req.body})
    .then(ans => res.status.json(req.body))
    .catch(err => res.status(500).json(err));
});


module.exports = router;