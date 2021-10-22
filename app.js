require('dotenv').config();
const express = require ('express');
const bodyparser = require ('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require ('mongoose');
const authRoutes = require('./routes/routes');


app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(bodyparser.json());

const USERS = "admin";
const PASSWORD = "admin";
const DBNAME = "preguntas";
const URI = `mongodb+srv://${USERS}:${PASSWORD}@cluster0.1tubl.mongodb.net/${DBNAME}?retryWrites=true&w=majority`;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}


mongoose.connect(URI, options)
    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log('error db:', e))

app.use(express.json());


//Define la ruta raiz y concatena las rutas de authRoutes xd
app.use('/api/juego', authRoutes);

app.listen(PORT, () => {console.log('escuchando en el puerto ' + PORT)})