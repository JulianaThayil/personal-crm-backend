const router = require('express').Router();
let Debt = require('../models/debt.model');

router.route('/').get((req, res) => {
  Debt.find()
    .then(debts => res.json(debts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const amount = req.body.amount;

  const newdebt = new Debt({
    name,
    description,
    amount,
  });

  newdebt.save()
  .then(() => res.json('Debt added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Debt.findById(req.params.id)
    .then(debt => res.json(debt))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Debt.findByIdAndDelete(req.params.id)
    .then(() => res.json('debt deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Debt.findById(req.params.id)
    .then(debt => {
      debt.name = req.body.name;
      debt.description = req.body.description;
      debt.amount = req.body.amount;

      debt.save()
        .then(() => res.json('debt updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;