const mongoose = require('mongoose');

const kulinerBahaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    harga: {
        type: String,
        required: false,
    },
    kontak: {
        type: String,
        required: true,
    }
});

const KulinerBaha = mongoose.model('KulinerBaha', kulinerBahaSchema);
module.exports = KulinerBaha;
