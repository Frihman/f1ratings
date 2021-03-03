var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var driverSchema = require('../driverSchema.js');

var Driver = mongoose.model('Driver', driverSchema);

/* POST from form */
router.post('/', function(req, res, next) {
  res.redirect('/');
});

router.get('/', function(req, res, next) {
  Driver.find({}, function (err, data) {
    res.send(data);
  });
});

module.exports = router;