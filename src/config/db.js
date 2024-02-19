const mongoose = require("mongoose");

const connectMongodb = () => {
    try {
        console.log("successfully connect to mongoDB server");
        return mongoose.connect('mongodb://127.0.0.1:27017/freelance')
    } catch (error) {
        console.log("error", error.message);
    }
}
module.exports = connectMongodb