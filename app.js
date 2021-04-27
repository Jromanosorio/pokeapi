const port = process.env.PORT || 3000;

const axios = require('axios');
const express = require('express');
const app = express();
const pokemon = 'ditto'
let datos;

axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(response => {
        datos = response.data.moves[0].move;
    })
    .catch(err => {
        console.log('Error al realizar la consulta' + err);
    })

app.get('/', (req, res) => {
    res.json(datos)
    res.end()
})

app.listen( port, () => {
    console.log('Escuchando el puerto: ' + port);
})