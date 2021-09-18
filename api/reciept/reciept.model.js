var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const RecieptSchema = mongoose.Schema({

        //   assetId:  {type: Schema.Types.ObjectId, ref: 'Asset'},
          contractId: {type: mongoose.Schema.Types.ObjectId,
            ref: 'Contract'},
          recieptDate: {type: String},
          recieptNumber: {type: String},
          paymentMethod: {type: String},
          trId: {type: String},
          recivedAmount: {type: String},
});

module.exports = mongoose.model('Reciept', RecieptSchema);
