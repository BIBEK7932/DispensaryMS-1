const mongoose = require("mongoose");
const bookSchema = mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
})

const bookModel = mongoose.model("book",bookSchema);
module.exports = bookModel