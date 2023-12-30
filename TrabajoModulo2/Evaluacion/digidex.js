
// JavaScript para mostrar/ocultar la lista de Digimons
const toggleList = () => {
    const digiList = document.getElementById("digiList");
    digiList.style.display = (digiList.style.display === "none") ? "block" : "none";
};

// Asigna el evento al botón
const toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", toggleList);


async function fetchDigimon() {
    const digiNameInput = document.getElementById("digiName");
    const digiName = digiNameInput.value.toLowerCase();

    try {
        const response = await fetch(`https://digimon-api.vercel.app/api/digimon/name/${digiName}`);
        if (!response.ok) {
            throw new Error(`No se pudo encontrar el Digimon: ${response.statusText}`);
        }

        const data = await response.json();
        const digiImg = data[0].img;
        const digiLevel = data[0].level;
        
        updateDigimonInfo(digiImg, digiLevel);
    } catch (error) {
        console.error(error);
        updateDigimonInfo("./digimon-palmon.gif", "Desconocido");
    }
}

function updateDigimonInfo(imgUrl, level) {
    const digiPhoto = document.getElementById("digiImg");
    const digiLevel = document.getElementById("level");

    digiPhoto.src = imgUrl;
    digiLevel.textContent = `Nivel: ${level}`;
}

// Nueva función para listar nombres de Digimons
async function listDigimonNames() {
    try {
        const response = await fetch("https://digimon-api.vercel.app/api/digimon");
        if (!response.ok) {
            throw new Error(`No se pudo obtener la lista de Digimons: ${response.statusText}`);
        }

        const data = await response.json();
        const digiNamesList = document.getElementById("digiNamesList");

        data.forEach((digi) => {
            const listItem = document.createElement("li");
            listItem.textContent = digi.name;
            digiNamesList.appendChild(listItem);
        });
    } catch (error) {
        console.error(error);
    }
}

// Llama a la función para listar los nombres cuando se carga la página
window.addEventListener("load", listDigimonNames);


