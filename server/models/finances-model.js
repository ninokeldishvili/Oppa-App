const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Finance = new Schema({
    account_number: {
        type: String,
    },
    id_number: {
        type: String,
    },
    mobile_number: {
        type: String,
    },
    amount: {
        type: Number,
    },
    comission: {
        type: Number,
    }
})

module.exports = mongoose.model('Finance',Finance);