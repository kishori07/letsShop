const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const registerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    mobileno: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    cpassword: {
        type: String,
        required: true
    },
    cartItems: []

    // imgUrl: {
    //     type: String,
    //     required: true
    // }
})

module.exports = mongoose.model('Register', registerSchema);