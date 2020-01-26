const mongoose = require("mongoose");

var customersSchema = new mongoose.Schema({
    _id : {
        type : Number,
        required : "Required",
       // unique : true
    },
    name : {
        type : String,
        required : "Required"
    },
    email : {
        type : String,
        required : "Required"
    }
});

module.exports = mongoose.model("customer", customersSchema);