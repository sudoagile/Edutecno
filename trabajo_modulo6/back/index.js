const express = require('express');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

// Importa tus controladores
const animeController = require('./controllers/animeControllers');

// Configurar express-handlebars
app.engine('.hbs', engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', './views');

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Middleware para parsear el cuerpo de las solicitudes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configurar method-override para usar PUT y DELETE donde no son soportados nativamente
app.use(methodOverride('_method'));

// Rutas para renderizar vistas
app.get('/', (req, res) => {
    animeController.getAnimes(req, res, (animes) => {
        res.render('list', { animes });
    });
});

app.get('/anime/create', (req, res) => {
    res.render('create');
});

app.get('/anime/update/:id', (req, res) => {
    animeController.findAnime(req, res, (anime) => {
        res.render('update', { anime });
    });
});

app.get('/anime/delete/:id', (req, res) => {
    animeController.findAnime(req, res, (anime) => {
        res.render('delete', { anime });
    });
});

// Rutas API para operaciones CRUD
app.post('/anime', animeController.addAnime);
app.get('/anime', animeController.getAnimes);
app.get('/anime/:id', animeController.findAnime);
app.put('/anime/:id', animeController.updateAnime);
app.delete('/anime/:id', animeController.deleteAnime);

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).send("Lo siento, no se pudo encontrar esa página!");
});

// Arrancar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

module.exports = app;
