const express = require('express');
const router = express.Router({mergeParams: true});

const Posts = require('../models/Nft');
const Users = require('../models/User');


router.get('/', async (req, res) => {
  
  Posts
    .find()
    .then(ans => res.json(ans))
    .catch(err => res.status(500).json(err));
});

router.get('/summary', async (req, res) => {
  try {
    const summary = await Posts.aggregate([
      {$group:{
        _id: {'$first': Users._id},
        average: {'$avg': "$responses"},
        sum: {"$sum": "$responses"},
        max: { "$max": "$responses" },
        min: { "$min": "$responses" }
      }},
      {$project: {
        _id: false,
        avg: '$average',
        sum: '$sum',
        max: '$max',
        min: '$min'
      }}
    ])
    return res.json(...summary)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/authors', async (req, res) => {
  try {
    const authors = await Users.aggregate([
      {$unwind: '$posts'},
      {$group:{
          _id: '$_id',
          posts: {$sum: 1},
          email: {'$first': '$email'}
      }},
      {$project: {
        _id: false,
        email: '$email',
        posts: '$posts'
      }}
    ]);
    return res.json(authors)
  } catch (err) {
    return res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id

  Posts
    .findById(id)
    .then(ans => res.json(ans))
    .catch(err => res.status(500).json(err))
});



router.post('/:idUser', async (req, res) => {
  const id = req.params.idUser
  const post = new Posts({
    text: req.body.text,
    responses: req.body.responses,
    autor: id
  })

  post
    .save()
    .then(ans => res.json(ans))
    .catch(err => res.status(500).json(err))
  Users
    .findByIdAndUpdate(id, {'$addToSet': {posts: post.id}})
    .catch(err => res.status(500).json(err))
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  
  Posts
    .findByIdAndDelete(id)
    .then(ans =>  res.json(ans))
    .catch(err => res.status(500).json(err))
});




module.exports = router;
