var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var raceSchema = require('../raceSchema.js');

var Race = mongoose.model('Race', raceSchema);

/* POST from form */
router.post('/:id', function(req, res, next) {
    var DOTD = req.body.DOTD;

    var drivers = req.body;

    
    for( var i = 0; i < drivers.length; i++){ 
    
        if ( drivers[i] === DOTD) { 
    
            drivers.splice(i, 1); 
        }
    
    }
    
    //for(i = 0; )
    
    //Race.updateOne({Round: req.params.id}, {Ratings: []})

    res.send(drivers);
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