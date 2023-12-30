async function fetchDigimon() {
    const searchNameInput = document.getElementById("searchName");
    const searchName = searchNameInput.value.trim();

    if (!searchName) {
        alert("Por favor, ingresa un nombre de Digimon para buscar.");
        return;
    }

    try {
        const response = await fetch(`https://digimon-api.vercel.app/api/digimon?name=${searchName}`);
        const data = await response.json();

        if (!Array.isArray(data) || data.length === 0) {
            alert("No se encontraron resultados para el nombre ingresado.");
            return;
        }

        const digimon = data[0];

        // Actualizar la imagen del Digimon
        const digiImg = digimon.img;
        digiImage(digiImg);

        // Mostrar el nombre y nivel del Digimon
        const digiName = digimon.name;
        const digiLevel = digimon.level;
        digiData(digiName, digiLevel);
    } catch (error) {
        console.error(error);
    }
}

function digiImage(url) {
    const digiPhoto = document.getElementById("digiImg");
    digiPhoto.src = url;
}

function digiData(name, level) {
    const digiName = document.getElementById("digiName");
    const digiLevel = document.getElementById("level");
    
    digiName.textContent = `Nombre: ${name}`;
    digiLevel.textContent = `Nivel: ${level}`;
}
