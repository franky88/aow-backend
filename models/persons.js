const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    about_me: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Person', personSchema);