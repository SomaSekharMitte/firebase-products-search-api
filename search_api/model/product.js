/**
 * Products model/schema JS file mapped to products collection in MongoDB
 */
// Load modules

const mongoose = require('mongoose');

// Model for Product
const productSchema = mongoose.Schema ({
    _id: mongoose.Types.ObjectId,
    productId: String,
    productName: String,
    shortDescription: String,
    longDescription: String,
    price: Number,
    productImage: String,
    reviewRating: Number,
    reviewCount: Number,
    inStock: Boolean
});

module.exports = mongoose.model('Product', productSchema, 'productsdetail');