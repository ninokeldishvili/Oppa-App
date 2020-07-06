const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MobileOperator = new Schema({
    mobile_number: {
        type: String
    },
    amount: {
        type: Number
    },
    comission: {
        type:Number
    }
});

module.exports = mongoose.model('MobileOperator', MobileOperator)