const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    year: {
        type: Number,
        required: true,
        min : [1000 , 'Year must be greater than 1000'],
        max: [new Date().getFullYear() , 'Year must be less than or equal to current year'],
    },
});

module.exports = mongoose.model('Book', bookSchema);