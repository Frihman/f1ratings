const mongoose = require('mongoose');

const raceSchema = new mongoose.Schema({
    Name: {
        type: String
    },
    Country: {
        type: String
    },
    City: {
        type: String
    },
    Circuit: {
        type: String
    },
    StartTime: {
        type: String
    },
    Round: {
        type: String
    },
    Img: {
        type: String
    },
    Ratings: [
        {
            Driver: {
                type: String
            },
            Rating: {
                type: String
            },
            DOTD: {
                type: String
            }  
        }
    ]
});

module.exports = raceSchema;