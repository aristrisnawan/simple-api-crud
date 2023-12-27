const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    nama: {
        require: true,
        type: String
    },
    email: {
        require: true,
        type: String
    }
})

module.exports = mongoose.model('mahasiswa', dataSchema)