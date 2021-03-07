var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var raceSchema = require('../raceSchema.js');
var driverSchema = require('../driverSchema.js');

var Driver = mongoose.model('Driver', driverSchema);
var Race = mongoose.model('Race', raceSchema);

/* POST from form */
router.post('/:id', function(req, res, next) {
    var DOTD = req.body.DOTD;
    var id = parseInt(req.params.id);

    var drivers = [
      {Driver: '14', Rating: '6', DOTD: 'false'},
      {Driver: '77', Rating: '5', DOTD: 'false'},
      {Driver: '10', Rating: '7', DOTD: 'false'},
      {Driver: '99', Rating: '5', DOTD: 'false'},
      {Driver: '44', Rating: '8', DOTD: 'false'},
      {Driver: '6', Rating: '6', DOTD: 'false'},
      {Driver: '16', Rating: '9', DOTD: 'false'},
      {Driver: '9', Rating: '5', DOTD: 'false'},
      {Driver: '4', Rating: '7', DOTD: 'false'},
      {Driver: '31', Rating: '8', DOTD: 'false'},
      {Driver: '11', Rating: '7', DOTD: 'false'},
      {Driver: '7', Rating: '6', DOTD: 'false'},
      {Driver: '3', Rating: '8', DOTD: 'false'},
      {Driver: '63', Rating: '5', DOTD: 'false'},
      {Driver: '55', Rating: '5', DOTD: 'false'},
      {Driver: '47', Rating: '7', DOTD: 'false'},
      {Driver: '18', Rating: '6', DOTD: 'false'},
      {Driver: '22', Rating: '9', DOTD: 'false'},
      {Driver: '33', Rating: '8', DOTD: 'false'},
      {Driver: '5', Rating: '6', DOTD: 'false'}
    ];

    var driversList = [];

    Driver.find({}, function(err, data) {
        driversList = data;
        console.log(driversList[0].Ratings);

        for(let i = 0; i < 20; i++) {
            drivers[i].Driver = req.body.driverRating[i].split('_').pop();
            drivers[i].Rating = req.body.driverRating[i].split('_').shift();
    
            if(driversList[i].Ratings.length < id) {
                Driver.updateOne({Number: req.body.driverRating[i].split('_').pop()}, {$push: {Ratings: {Round: req.params.id, Rating: req.body.driverRating[i].split('_').shift(), DOTD: 'false'}}}, function(err) {
                    console.log('added');
                });
            }
    
            if(DOTD == drivers[i].Driver) {
                drivers[i].DOTD = 'true';
            }
        }
    });
    
    
    
    Race.updateOne({Round: req.params.id}, {Ratings: drivers}, function(err) {
        res.redirect('/');
    });
});

router.get('/', function(req, res, next) {
    Race.find({}, function (err, data) {
        res.send(data);
    });
});

router.get('/:id', function(req, res, next) {
    Race.find({Round: req.params.id}, function (err, data) {
        res.send(data);
    });
});

module.exports = router;