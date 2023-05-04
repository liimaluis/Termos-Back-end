const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    cpf:{
        type: String,
        required: true,
        unique: true,
    },
    cep:{
        type: String,
        required: true,
    },
    telefone:{
        type: String,
        required: true
    },
    termosprivacidade:{
        type: Boolean,
        required: true
    }

})

module.exports = mongoose.model('User', Schema)