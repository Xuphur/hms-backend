var mongoose = require('mongoose');

const DriverSchema = mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },

    cnic: {
        type: String,
        required: true
    },

    license: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    
    status: {
        type: [{
          type: String,
          enum: ['Available', 'On-Trip', 'Leave']
        }],
        default: ['Available']
    }
        
});

const Driver = 

module.exports.getDriverById = function(id, callback){
    Driver.findById(id, callback);
}

module.exports.getDriverByUsername = function(username, callback){
    const query = {username: username}
    Driver.findOne(query, callback);
}

module.exports = mongoose.model('Driver', DriverSchema);
