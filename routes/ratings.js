var express = require('express');
var router = express.Router();

/* POST from form */
router.post('/', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;