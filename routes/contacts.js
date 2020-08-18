const router = require('express').Router();
let Contact = require('../models/contacts.model');

router.route('/').get((req, res) => {
  Contact.find()
    .then(contacts => res.json(contacts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const nickname = req.body.nickname;
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;


  const newcontact = new Contact({nickname,name,phone,email});

  newcontact.save()
    .then(() => res.json('Contact added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Contact.findByIdAndDelete(req.params.id)
    .then(() => res.json('Contact deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;