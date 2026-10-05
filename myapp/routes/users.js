var express = require('express');
var router = express.Router();

const User = require('../models/User');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const filter = {};

    if (req.query.city) {
      filter.city = req.query.city;
    }

    const users = await User.find(filter);

    res.json(users);
  } catch (error) {
    next(error);
  }
});

module.exports = router;