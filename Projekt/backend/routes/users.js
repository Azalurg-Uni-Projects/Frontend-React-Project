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
    logo_url: req.body.logo_url,
    url: req.body.url,
    birthday: req.body.birthday,
    description: req.body.description,
    registration_date: today
  });

  user
    .save()
    .then(ans => res.json(ans))
    .catch(err => res.status(500).json(err));
});

router.delete('/:user_id', async (req, res) => {
  const id = req.params.user_id;
  
  Users
    .findByIdAndDelete(id)
    .then(ans =>  res.json(ans))
    .catch(err => res.status(500).json(err))
});

router.put('/:user_id', async (req, res) => {
  const id = req.params.user_id;

  Users
    .findByIdAndUpdate(id, {...req.body})
    .then(ans => res.json(ans))
    .catch(err => res.status(500).json(err));

});


module.exports = router;