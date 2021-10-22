const mongoose = require('mongoose');

const preguntasSchema = mongoose.Schema({
    pregunta: {
        type: String,
        required: true

    },
    respuesta: {
        type: String,
        required: true

    },
    categoria: {
        type: Number,
        required: true

    }


})

module.exports = mongoose.model('Preguntas', preguntasSchema);