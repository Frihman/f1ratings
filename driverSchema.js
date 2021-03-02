const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    FirstName: {
        type: String
    },
    LastName: {
        type: String
    },
    Team: {
        type: String
    },
    Img: {
        type: String
    },
    Ratings: [

    ]
});

module.exports = driverSchema;