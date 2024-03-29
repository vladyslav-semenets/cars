const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        created: {
            type: Date,
            default: Date.now
        },
    }
);

module.exports = mongoose.model('categories', Category);
