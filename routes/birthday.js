const router = require('express').Router();
let Birthday = require('../models/birthday.model');

router.route('/').get((req, res) => {
  Birthday.find()
    .then(birthdays => res.json(birthdays))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const nickname = req.body.nickname;
  const description = req.body.description;
  const birthdate = req.body.birthdate;

  const newbirthday = new Birthday({
    nickname,
    description,
    birthdate,
  });

  newbirthday.save()
  .then(() => res.json('Birthday added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Birthday.findById(req.params.id)
    .then(birthday => res.json(birthday))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Birthday.findByIdAndDelete(req.params.id)
    .then(() => res.json('Birthday deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Birthday.findById(req.params.id)
    .then(birthday => {
      birthday.nickname = req.body.nickname;
      birthday.description = req.body.description;
      birthday.birthdate = req.body.birthdate;

      birthday.save()
        .then(() => res.json('birthday updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;