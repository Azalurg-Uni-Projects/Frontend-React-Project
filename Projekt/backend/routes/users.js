const express = require('express');
const router = express.Router();

const Users = require('../models/User');
const Posts = require('../models/Post');

router.get('/', async (req, res) => {
  Users
    .find()
    .then(ans => res.json(ans))
    .catch(err => res.status(500).json(err));
});

router.get('/registration-raport/:date', async (req, res) => {
  try {
    const result = await Users.aggregate([
      { $match: { 'registrationDate': { '$gte': new Date(req.params.date) } } },
      { $group: { _id: { $dateToString: { format: "%Y-%m-%d", date: '$registrationDate' } }, count: { $sum: 1 } } },
      { $addFields: { date: '$_id' } },
      { $project: { _id: false } }
    ]);
    return res.json(result)
  } catch (err) {
    return res.json(err)
  }
})

router.post('/', async (req, res) => {
  console.log(req.body)

  const today = new Date()

  const user = new Users({
    login: req.body.login,
    email: req.body.email,
    registrationDate: today
  });

  user
    .save()
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

router.put('/:idUser', async (req, res) => {
 const id = req.params.idUser;

Users
  .findOneAndReplace({_id: id}, {...req.body})
  .then(ans => res.json(ans))
  .catch(err => res.status(500).json(err))
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
