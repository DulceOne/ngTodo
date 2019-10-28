const mongoose = require('mongoose');
const cardSchema = mongoose.Schema({
    author: String,
    body: String,
    date: String
});
module.exports = mongoose.model('Card',cardSchema);