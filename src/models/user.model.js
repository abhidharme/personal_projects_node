const mongoose = require("mongoose");

const customerModel = new mongoose.Schema({
    name: { type: String, },
    email: { type: String, },
    password: { type: String }
});

module.exports = mongoose.model("customers", customerModel)