const mongoose = require("mongoose");

const product_schema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "This field is required to enter"],
        minLength: 10,
        maxLength: 255,
    },
    date:{
         type: Date,
         required: [true, "This field is required to enter"]
    },
    price: {
        type: Number,
        required: [true, "This field is required to enter"],
        minLength: 0,
    },
    qty:{
        type: Number,
        required: [true, "This field is required to enter"],
        
    },
    storecode:{
        type:String,
        required: [true, "This field is required to enter"],
    }
    
    
    
    
});

module.exports = mongoose.model("Product", product_schema);
