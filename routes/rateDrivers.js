var express = require('express');
var router = express.Router();

/* GET ratings page. */
router.get('/:id', function(req, res, next) {
  res.render('rateDrivers', { title: 'Race Ratings' , id: req.params.id});
});

module.exports = router;
