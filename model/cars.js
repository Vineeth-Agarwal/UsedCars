const mongoose = require("mongoose")

var carSchema = new mongoose.Schema({
    make: String,
    model: String,
    year:Number,
    type: String,
    features: [String],
    purchaseDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('cars', carSchema);



