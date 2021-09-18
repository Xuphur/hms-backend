var mongoose = require('mongoose');

const AssetSchema = mongoose.Schema({

 assetType: {type: String, lowercase: true},
 title: {type: String, lowercase: true},
 status: {type: String, lowercase: true},
assetDetail : {
        vehicle : {
          contractId: {type: String, lowercase: true},
        reg: {type: String, lowercase: true},
        make: {type: String, lowercase: true},
        model: {type: String, lowercase: true}, 
        year: {type: String, lowercase: true},
        colour: {type: String, lowercase: true},
        meterOut: {type: String, lowercase: true},
        meterIn: {type: String, lowercase: true},
        driveZone: {type: String, lowercase: true},
        destination: {type: String, lowercase: true},
        actualPrice: {type: String, lowercase: true},
        },
        house : {
          contractId: {type: String, lowercase: true},
            address: {
              floor: {type: String, lowercase: true},
              number: {type: String, lowercase: true},
              street: {type: String, lowercase: true},
              sector: {type: String, lowercase: true},
              city: {type: String, lowercase: true},
              province : {type: String, lowercase: true},
              zipcode : {type: String, lowercase: true},
                      },
            area : {type: String, lowercase: true},
            actualPrice: {type: String, lowercase: true},
        },
        item : {
          contractId: {type: String, lowercase: true},
          title: {type: String, lowercase: true},
          make: {type: String, lowercase: true},
          model: {type: String, lowercase: true},
          year: {type: String, lowercase: true},
          discription: {type: String, lowercase: true},
          actualPrice: {type: String, lowercase: true},
        }
},
owner : {
    name: {type: String, lowercase: true},
    fatherName: {type: String, lowercase: true},
    cnic: {type: String, lowercase: true},
    mobile1: {type: String, lowercase: true},
    mobile2: {type: String, lowercase: true},
    address: {
    number: {type: String, lowercase: true},
    street: {type: String, lowercase: true},
    sector: {type: String, lowercase: true},
    city: {type: String, lowercase: true},
    province : {type: String, lowercase: true},
    zipcode : {type: String, lowercase: true},
    },
},

});

module.exports = mongoose.model('Asset', AssetSchema);
