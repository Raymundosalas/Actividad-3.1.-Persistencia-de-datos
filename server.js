const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Ruta principal
app.get('/', (req, res) => {
    res.send('API funcionando correctamente 🚀');
});

// Importar rutas
const moviesRoutes = require('./movies.routes');
app.use('/api/movies', moviesRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
