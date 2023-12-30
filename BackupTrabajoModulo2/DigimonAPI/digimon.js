const fetchDigimon = async () => {
    const digiNameInput = document.getElementById("digiName");
    let digiName = digiNameInput.value.toLowerCase();
    const url = `https://digimon-api.vercel.app/api/digimon?name=${digiName}`;

    try {
        let response = await fetch(url);

        if (!response.ok) {
            console.error(response);
            return;
        }

        let data = await response.json();

        if (data.length === 0) {
            console.error("No se encontraron resultados.");
            return;
        }

        let digimon = data[0];
        console.log(digimon);

        let digiImg = digimon.img;
        let digiInfo = digimon.level;
        digiImage(digiImg);
        digiData(digiInfo);
    } catch (error) {
        console.error(error);
    }
};

const digiImage = (url) => {
    const digiPhoto = document.getElementById("digiImg");
    digiPhoto.src = url;
};

const digiData = (level) => {
    const digiLevel = document.getElementById("level");
    digiLevel.textContent = `Nivel: ${level}`;
};
