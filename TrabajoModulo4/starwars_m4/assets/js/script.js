document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    let timer;

    cards.forEach(card => {
        const range = card.getAttribute('data-range').split('-').map(Number);
        const characterInfo = card.querySelector('.card-body');

        card.addEventListener('mouseenter', function() {
            timer = setTimeout(() => {
                this.querySelector('.card-header').style.backgroundColor = '#333';
                this.querySelector('.card-header div').style.color = '#fff';

                cards.forEach(otherCard => {
                    if (otherCard !== card) {
                        otherCard.querySelector('.card-body').innerHTML = '';
                        otherCard.querySelector('.card-header').style.backgroundColor = '';
                        otherCard.querySelector('.card-header div').style.color = '';
                    }
                });

                characterInfo.innerHTML = "<p>Cargando...</p>";

                fetchRandomCharacters(range, 3).then(data => {
                    characterInfo.innerHTML = data.map(character => `
                        <div>
                            <img src="https://starwars-visualguide.com/assets/img/characters/${character.url.match(/\d+/)[0]}.jpg" alt="${character.name}" width="100">
                            <p><strong>Nombre:</strong> ${character.name}</p>
                            <p><strong>Altura:</strong> ${character.height} cm</p>
                            <p><strong>Peso:</strong> ${character.mass} kg</p>
                            <hr>
                        </div>
                    `).join('');
                }).catch(error => {
                    characterInfo.innerHTML = "<p>Ocurrió un error al cargar los datos. Por favor intenta de nuevo.</p>";
                    console.error("Error fetching characters: ", error);
                });
            }, 500);
        });

        card.addEventListener('mouseleave', function() {
            clearTimeout(timer);
            this.querySelector('.card-header').style.backgroundColor = '';
            this.querySelector('.card-header div').style.color = '';
        });
    });
});

function fetchRandomCharacters(range, count) {
    let promises = [];
    let ids = [];
    for (let i = 0; i < count; i++) {
        let randomCharacterId;
        do {
            randomCharacterId = Math.floor(Math.random() * (range[1] - range[0] + 1)) + range[0];
        } while (ids.includes(randomCharacterId));
        ids.push(randomCharacterId);
        promises.push(fetch(`https://swapi.dev/api/people/${randomCharacterId}/`).then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        }));
    }
    return Promise.all(promises);
}
