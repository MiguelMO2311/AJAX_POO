const axios = require('axios');

let dato = { mensaje: 'Hola, servidor!' };

axios.post('http://localhost:3000/api/ruta', dato)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

