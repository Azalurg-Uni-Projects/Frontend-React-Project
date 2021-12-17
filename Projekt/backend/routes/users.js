const express = require('express');
const router = express.Router();

const Users = require('../models/User');

router.get('/', async (req, res) => {
  Users
    .find()
    .then(ans => res.json(ans))
    .catch(err => res.status(500).json(err));
});

router.get('/:idUser', async (req, res) => {
  const id = req.params.idUser

  Users
    .findById(id)
    .then(ans => res.json(ans))
    .catch(err => res.status(500).json(err))
});

router.post('/', async (req, res) => {
  console.log(req.body)
  const today = new Date()
  
  const user = new Users({
    nickname: req.body.nickname,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone_number: req.body.phone_number,
    place_of_origin: req.body.place_of_origin,
    birthday: req.body.birthday,
    logo_url: req.body.logo_url,
    description: req.body.description,
//------------------------------------------------------    
    registrationDate: today,
    created_nft_id: [],
    colected_nft_id: [],
    created_collection_id: []
    
  });
  user
    .save()
    .then(ans => res.json(ans))
    .catch(err => res.status(500).json(err));
});

router.delete('/:idUser', async (req, res) => {
  const id = req.params.idUser;
  
  Users
    .findByIdAndDelete(id)
    .then(ans => {
      ans.posts.map(post => Posts.findByIdAndDelete(post))
      res.json(ans)
    })
    .catch(err => res.status(500).json(err))
});

router.patch('/:idUser', async (req, res) => {
  const id = req.params.idUser;

  Users
    .findByIdAndUpdate(id, {...req.body})
    .then(ans => res.json(ans))
    .catch(err => res.status(500).json(err));

});


module.exports = router;
