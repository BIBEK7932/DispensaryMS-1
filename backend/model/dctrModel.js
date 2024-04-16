const mongoose = require('mongoose');
const doctors = mongoose.Schema({
    name:{
        type: String
    },
    category:{
        type: String
    },
    image:{
        type: String
    },
    fContact:{
        type: String
    },
    insContact:{
        type: String
    }
})


const doctorsScema=mongoose.model('DoctotsInformation',doctors)
module.exports = doctorsScema;