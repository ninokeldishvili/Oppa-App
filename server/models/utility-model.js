const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Utility = new Schema ({
    id_number: {
        type: String
    },
    mobile_number: {
        type: String
    },
    amount: {
        type: Number
    },
    comission:{
        type:Number
    }
});

module.exports = mongoose.model('Utility', Utility)