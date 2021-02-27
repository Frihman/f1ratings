var express = require('express');
var router = express.Router();

/* GET ratings page. */
router.get('/', function(req, res, next) {
  res.render('ratings', { title: 'Race Ratings' });
});

module.exports = router;
