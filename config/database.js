const mongoose = require("mongoose")

module.exports = mongoose.connect("mongodb+srv://vineeth:fAzlIxXTBGrEHUBD@cluster0-zlyhn.mongodb.net/UsedCars?retryWrites=true")    
    .then(() => {
        console.log("DB connected")
    }, err => {
        console.log("DB error"+  err)
    }
    )



