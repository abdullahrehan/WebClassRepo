const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const adminschema = Schema({
    password: { type: String },
    email: { type: String },

})

module.exports = mongoose.model("Admin", adminschema);