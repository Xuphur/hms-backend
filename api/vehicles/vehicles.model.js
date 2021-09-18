var mongoose = require('mongoose');

const VehicleSchema = mongoose.Schema({

    reg: {
        type: String,
      required: 'Kindly enter the registration number'
    },
    
    make: {
        type: String
    },

    model: {
        type: String
    },

    year: {
        type: String
    },

    colour: {
        type: String
    },

    value: {
        type: String
    },

    status: {
        type: [{
          type: String,
          enum: ['Available', 'On-Trip', 'Workshop']
        }],
        default: ['Available']
    }
});

module.exports = mongoose.model('Vehicle', VehicleSchema);