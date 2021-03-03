const mongoose = require('mongoose');

const driverSchema = new mongoose.Schema({
    FirstName: {
        type: String
    },
    LastName: {
        type: String
    },
    Number: {
        type: String
    },
    Team: {
        type: String
    },
    Img: {
        type: String
    },
    Ratings: [
        {
            Round: {
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

module.exports = driverSchema;