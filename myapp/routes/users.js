var express = require('express');
var router = express.Router();

const User = require('../models/User');

/* GET users listing. */
router.get('/:id', async function(req, res, next) {
  try {
    const user = await User.findById(req.params.id);

    res.json(user);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
