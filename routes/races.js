var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var raceSchema = require('../raceSchema.js');

var Race = mongoose.model('Race', raceSchema);

/* POST from form */
router.put('/', function(req, res, next) {
  res.redirect('/');
});

router.get('/', function(req, res, next) {
  Race.find({}, function (err, data) {
    res.send(data);
  });
});

module.exports = router;