/**
 * Users model/schema JS file mapped to users collection in MongoDB
 */
// Load modules

const mongoose = require('mongoose');

// Model for Product
const userSchema = mongoose.Schema ({
    _id: mongoose.Types.ObjectId,
    name: String,
    password: String,
    admin: Boolean
});

module.exports = mongoose.model('User', userSchema, 'users');