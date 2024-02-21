// Importa Express y body-parser
const express = require('express');
const bodyParser = require('body-parser');

// Crea una aplicación Express
const app = express();

// Usa body-parser para parsear JSON
app.use(bodyParser.json());

// Configura la ruta de la API
app.post('/api/ruta', (req, res) => {
    // Imprime el mensaje recibido
    console.log(req.body.mensaje);

    // Devuelve el mismo mensaje al cliente
    res.json(req.body);
});

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});
