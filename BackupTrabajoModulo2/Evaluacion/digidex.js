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


