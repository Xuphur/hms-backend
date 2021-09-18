var mongoose = require("mongoose");

const ContractSchema = mongoose.Schema({
    ref: { type: String, lowercase: true },
    title: { type: String, lowercase: true },
    contractDate: { type: String, lowercase: true },
    startDate: { type: String, lowercase: true },
    duration: { type: String, lowercase: true },
    expiryDate: { type: String, lowercase: true },
    reaccurance: [{
        type: String,
        nxtDate: String,
        nxtStatus: String
    }],
    nxtDue: { type: String, lowercase: true },
    increment: { type: String, lowercase: true },
    incrementSchedule: { type: String, lowercase: true },
    status: { type: String, lowercase: true },
    paymentMethod: { type: String, lowercase: true },
    priceQuoted: { type: String, lowercase: true },
    downPayment: { type: String, lowercase: true },
    avdancePayment: { type: String, lowercase: true },
    totalPayable: { type: String, lowercase: true },
    installment: { type: String, lowercase: true },
    cancelation: { type: String, lowercase: true },
    saleType: { type: String, lowercase: true },
    totalRecieved: { type: String, lowercase: true },
    balance: { type: String, lowercase: true },
    customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
    asset: { type: mongoose.Schema.Types.ObjectId, ref: "Asset" }
});

module.exports = mongoose.model("Contract", ContractSchema);