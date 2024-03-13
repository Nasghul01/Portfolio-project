const mongoose = require("mongoose");

const EnqueriesSchema = new mongoose.Schema({
    name : String,
    email : String,
    phone : String,
    message : String
})

const Enqueries = mongoose.model("enqueries", EnqueriesSchema);

module.exports = Enqueries; 