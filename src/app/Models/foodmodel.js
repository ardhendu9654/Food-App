const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    imageUrl: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    favorite: { type: Boolean, required: true },
    origins: { type: [String], required: true },
    tags: { type: [String] } // optional field
});

const Food = mongoose.model('Food_Data', foodSchema);

module.exports = Food;