const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const axios = require('axios');
const hbs = require('hbs');

let pokemon = '';
let datos = {
    imagen: '',
    nombre: '',
    numero: '',
    tipo1:  '',
    tipo2:  '',  
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', (req, res) => {

    pokemon = req.body.name
    console.log(pokemon);

axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
    .then(response => {

        datos = {

            imagen: response.data.sprites.other["official-artwork"].front_default,
            nombre: response.data.name,
            numero: response.data.id,
            tipo1:  response.data.types[0].type.name,
            getTipo2() {
                if(response.data.types[1]){
                    this.tipo2 = response.data.types[1].type.name
                }

                return this.tipo2;
            }
        
        };

        res.render('pokemon', {datos})

    })
    .catch(err => {
        console.log('Error al realizar la consulta' + err);
        res.render('error')
    })
    
})

app.listen(port, () => {
    console.log('Escuchando el puerto: ' + port);
})