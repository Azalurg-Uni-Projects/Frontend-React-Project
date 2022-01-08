const express = require('express');
const router = express.Router();

const Users = require('../models/User');

router.get('/', async (req, res) => {
  Users
    .find()
    .then(ans => res.json(ans))
    .catch(err => res.status(500).json(err));
});

router.get('/:user_id', async (req, res) => {
  const id = req.params.user_id

  Users
    .findById(id)
    .populate(["created_nft_id", "colected_nft_id", "created_collection_id"])
    .then(ans => res.json(ans))
    .catch(err => res.status(500).json(err))
});

router.post('/', async (req, res) => {
  console.log(req.body)
  const today = new Date()
  
  const user = new Users({
    registration_date: today,
    created_nft_id: [],
    colected_nft_id: [],
    created_collection_id: [],
    
    nickname: req.body.nickname,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    phone_number: req.body.phone_number,
    place_of_origin: req.body.place_of_origin,
    birthday: req.body.birthday,
    logo_url: req.body.logo_url,
    description: req.body.description
  });
  user
    .save()
    .then(ans => res.json(ans))
    .catch(err => res.status(500).json(err));
});

router.delete('/:user_id', async (req, res) => {
  const id = req.params.user_id;
  
  Users
    .findById(id)
    .then(user => {
      if (user["created_nft_id"][0] == null &&
        user["colected_nft_id"][0] == null &&
        user["created_collection_id"][0] == null){
          Users
          .findByIdAndDelete(id)
          .then(ans =>  res.json(ans))
          .catch(err => res.status(500).json(err))
        }
      else{
        res.status(500).send("one of the arrays is not empty");
      }
    })
    .catch(err => res.status(500).json(err))

  if (is_empty == true){
    Users
      .findByIdAndDelete(id)
      .then(ans =>  res.json(ans))
      .catch(err => res.status(500).json(err))
  }
});

router.put('/:user_id', async (req, res) => {
  const id = req.params.user_id;

  Users
    .findByIdAndUpdate(id, {...req.body})
    .then(ans => res.json(ans))
    .catch(err => res.status(500).json(err));

});


module.exports = router;
