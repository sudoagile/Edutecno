const fs = require('fs').promises;
const path = require('path');

// Camino al archivo JSON donde se almacenan los datos
const DATA_FILE = path.join(__dirname, '../data/anime.json');

// Función auxiliar para cargar los datos de los animes
async function loadAnimesData() {
    const data = await fs.readFile(DATA_FILE, 'utf8');
    return JSON.parse(data);
}

// Función auxiliar para guardar los datos de los animes
async function saveAnimesData(animes) {
    const data = JSON.stringify(animes, null, 2);
    await fs.writeFile(DATA_FILE, data, 'utf8');
}

// Añadir un nuevo anime
async function addAnime(req, res) {
    const { nombre, genero, año, autor } = req.body;
    const animes = await loadAnimesData();
    const id = Date.now().toString(); // Crear un nuevo ID basado en el tiempo actual

    animes[id] = { nombre, genero, año, autor };
    await saveAnimesData(animes);

    res.status(201).json({ id, nombre, genero, año, autor });
}

// Obtener todos los animes o un anime específico por id o nombre
async function getAnimes(req, res) {
    try {
        const animes = await loadAnimesData();
        let result;

        if (req.query.id) {
            result = animes[req.query.id] ? [animes[req.query.id]] : [];
        } else if (req.query.nombre) {
            result = Object.values(animes).filter(anime =>
                anime.nombre.toLowerCase().includes(req.query.nombre.toLowerCase())
            );
        } else {
            result = Object.values(animes);
        }

        res.status(200).json(result);
    } catch (e) {
        res.status(500).json({ message: e.message });
    }
}

// Encontrar un anime por ID
async function findAnime(req, res) {
    const animes = await loadAnimesData();
    const anime = animes[req.params.id];

    if (!anime) {
        return res.status(404).json({ message: 'Anime no encontrado' });
    }

    res.status(200).json(anime);
}

// Actualizar un anime
async function updateAnime(req, res) {
    const { nombre, genero, año, autor } = req.body;
    const animes = await loadAnimesData();

    if (!animes[req.params.id]) {
        return res.status(404).json({ message: 'Anime no encontrado' });
    }

    animes[req.params.id] = { nombre, genero, año, autor };
    await saveAnimesData(animes);

    res.status(200).json(animes[req.params.id]);
}

// Eliminar un anime
async function deleteAnime(req, res) {
    const animes = await loadAnimesData();

    if (!animes[req.params.id]) {
        return res.status(404).json({ message: 'Anime no encontrado' });
    }

    delete animes[req.params.id];
    await saveAnimesData(animes);

    res.status(200).json({ message: 'Anime eliminado exitosamente' });
}

module.exports = { addAnime, getAnimes, findAnime, updateAnime, deleteAnime };
