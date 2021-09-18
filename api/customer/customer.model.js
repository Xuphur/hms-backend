var mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    customer: {   
    name: {type: String, lowercase: true},
    fatherName: {type: String, lowercase: true},
        address: {
            number: {type: String, lowercase: true},
            street: {type: String, lowercase: true},
            sector: {type: String, lowercase: true},
            city: {type: String, lowercase: true},
            province : {type: String, lowercase: true},
            zipcode : {type: String, lowercase: true},
        },
        cnic: {type:  String, lowercase: true},
        license: {type:  String, lowercase: true},
        mobile1: {type:  String, lowercase: true},
        mobile2: {type:  String, lowercase: true},
    },
        guarantor: {
            gname: {type:  String, lowercase: true},
            gmobile: {type:  String, lowercase: true},
            gfather: {type:  String, lowercase: true},
            gcnic: {type:  String, lowercase: true},
            gaddress: {
                number: {type: String, lowercase: true},
                street: {type: String, lowercase: true},
                sector: {type: String, lowercase: true},
                city: {type: String, lowercase: true},
                province : {type: String, lowercase: true},
                zipcode : {type: String, lowercase: true},
            },
        },
        vehicleid: {type:  String, lowercase: true},
        contractId: {type:  String, lowercase: true},
});

module.exports = mongoose.model('Customer', CustomerSchema);
