
const Preguntas = require("../models/Preguntas");


const listPreguntas = async (req, categoria, res) => {
    Preguntas.find({categoria:categoria}, function (err, preguntas) {
        let preguntasMap = {};

        preguntas.forEach(function (pregunta) {
            preguntasMap[pregunta._id] = pregunta;
        });

        res.send(preguntasMap);
    });
}



module.exports = {
    listPreguntas
}