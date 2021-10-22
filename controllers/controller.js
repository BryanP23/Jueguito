const {listPreguntas} = require ("../util/preguntasUtil");


const getAllPreguntas = (req, res) => {
   
   let categoria = req.params.categoria
    listPreguntas (req, categoria ,res);
}

module.exports = {
    getAllPreguntas
}