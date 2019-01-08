var mongoose = require('mongoose')

//schema de produto
let Products = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    quantity: {
        type: Number,
        required: true,
        default: 0
    },
    price: {
        type: Number,
        required: true,
        default: 0
    }
});

//Exportando o schema de produtos
module.exports = mongoose.model('products', Products);