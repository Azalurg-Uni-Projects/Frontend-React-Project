const express = require('express');
const router = express.Router({mergeParams: true});

const Nft = require('../models/Nft');


router.get('/populate', async (req, res) => {
  
  Nft
    .find()
    .populate(["author_id", "owner_id"])
    .then(ans => res.json(ans))
    .catch(err => res.status(500).json(err));
});

router.get('/populate/:nft_id', async (req, res) => {
  const id = req.params.nft_id

  Nft
    .findById(id)
    .populate(["author_id", "owner_id"])
    .then(ans => res.json(ans))
    .catch(err => res.status(500).json(err))
});

router.get('/', async (req, res) => {
  
  Nft
    .find()
    .then(ans => res.json(ans))
    .catch(err => res.status(500).json(err));
});

router.get('/:nft_id', async (req, res) => {
  const id = req.params.nft_id

  Nft
    .findById(id)
    .then(ans => res.json(ans))
    .catch(err => res.status(500).json(err))
});

router.post('/:author_id', async (req, res) => {
  const id = req.params.author_id
  const today = new Date()

  const nft = new Nft({
    author_id: id,
    owner_id: id,
    created_date: today,
    collection_id: null,
    title: req.body.title,
    price: req.body.price,
    currency: req.body.currency,
    image_url: req.body.image_url,
    url: req.body.url,
    description: req.body.description
  })

  nft
    .save()
    .then(ans => res.json(ans))
    .catch(err => res.status(500).json(err))
});

router.delete('/:nft_id', async (req, res) => {
  const id = req.params.nft_id;

  Nft
    .findByIdAndDelete(id)
    .then(ans =>  res.json(ans))
    .catch(err => res.status(500).json(err))
});

router.put('/:nft_id', async (req, res) => {
  const id = req.params.nft_id;

  Nft
    .findByIdAndUpdate(id, {...req.body})
    .then(ans => res.json(ans))
    .catch(err => res.status(500).json(err));

});


module.exports = router;