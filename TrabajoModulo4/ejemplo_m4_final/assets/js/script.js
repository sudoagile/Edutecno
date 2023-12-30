//importaciones
import Pokemon from "./clases/Pokemon.js"
const principales = [];
const secundarios = [];

//pokémones principales 1- 151

//resto de pokémones 152 - 1017


//función ready
$(()=> {

    const getPokemon = async (id) => {
        let urlBase = "https://pokeapi.co/api/v2/pokemon/"
        let response = await fetch(urlBase+id);
        let dataPokemon = await response.json();
        return dataPokemon;
    }

    function* generadorPokemons(minId, maxId) {
        let contador = minId;
            while (contador <= maxId){

                yield new Promise(async (resolve, reject) => {
                    let pokemon = await getPokemon(contador);
                    resolve(pokemon);
                })
                contador++;
            }
        }

        let generadorPrincipales = generadorPokemons(1, 151);
        let generadorSecundarios = generadorPokemons(152, 1017);



    const agregarCard = (pokemon, contenedor) => {

        let estructuraCard = `
        <div class="col-12 col-md-6 col-lg-4 ">
            <div class="card  mx-auto w-75 mb-3 p-3 pe-1 shadow ps-5 mb-5 bg-body-tertiary rounded">
                <h2 class="tituloCard">${pokemon.nombre}</h2>
                <p>ID: ${pokemon.id}</p>
                <div class="d-flex justify-content-evenly" >
                    <img src="${pokemon.imagen}" alt="${pokemon.nombre}" class="w-25"/>
                    <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalPokemon" data-id="${pokemon.id}">Detalles</button>
                </div>
                <p>Estatura ${pokemon.estatura} cms, Peso: ${pokemon.peso} kgs.</p>
            </div>
        </div>
        `;

        contenedor.append(estructuraCard);

    }

    //let card1 = document.querySelector("#pokemonesPrincipales .card");

    $("#pokemonesPrincipales").find(".card").on("click", async function(){
        let pokemonApi = await generadorPrincipales.next().value;
        if(pokemonApi){
            let {id, name: nombre, weight: peso, height:estatura, stats } = pokemonApi;
            let imagen = pokemonApi.sprites.other["official-artwork"].front_default;
            let nuevoPokemon = new Pokemon(id, nombre, peso, estatura, imagen, stats);
            principales.push(nuevoPokemon);

            let contedorCards = $("#pokemonesPrincipales .row")
            agregarCard(nuevoPokemon, contedorCards);
            

        }else {
            alert("No existen más pokémones principales.");
            $("#pokemonesPrincipales").find(".card").off("click");
        }
    })


    $("#pokemonesSecundarios").find(".card").on("click", async function(){
        let pokemonApi = await generadorSecundarios.next().value;
        if(pokemonApi){
            let {id, name: nombre, weight: peso, height:estatura, stats } = pokemonApi;
            let imagen = pokemonApi.sprites.other["official-artwork"].front_default;
            let nuevoPokemon = new Pokemon(id, nombre, peso, estatura, imagen, stats);
            secundarios.push(nuevoPokemon);
            let contedorCards = $("#pokemonesSecundarios .row")
            agregarCard(nuevoPokemon, contedorCards);
            
        }else {
            alert("No existen más pokémones secundarios.");
            $("#pokemonesSecundarios").find(".card").off("click");
        }
    });

    
    const actualizarGrafico = (arrayStatsPokemon) => {
        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            exportEnabled: true,
            theme: "light1", // "light1", "light2", "dark1", "dark2"
            title:{
                text: "Simple Column Chart with Index Labels"
            },
              axisY: {
              includeZero: true
            },
            data: [{
                type: "column", //change type to bar, line, area, pie, etc
                //indexLabel: "{y}", //Shows y value on all Data Points
                indexLabelFontColor: "#5A5757",
                  indexLabelFontSize: 16,
                indexLabelPlacement: "outside",
                dataPoints: arrayStatsPokemon
            }]
        });
        chart.render();
    }

    //evento para los clicks botones cards

    $(".contenedorCards").on("click", ".btn", function(event){
        let id = this.dataset.id;
        let arrayPokemones = principales.concat(secundarios);

        let pokemonBuscado = arrayPokemones.find(pokemon => pokemon.id==id);

        console.log(pokemonBuscado.stats);

        let itemsStats = "";

        let arrayStatsPokemon = [];

        pokemonBuscado.stats.forEach(stat => {
            itemsStats += `<li>${stat.stat.name}: ${stat.base_stat}</li>`;

            arrayStatsPokemon.push({label: stat.stat.name, y: stat.base_stat});
        });

        $("#listaStats").html(itemsStats);
    

        $("#modalPokemonLabel").text(pokemonBuscado.nombre);
        $("#modalPokemon").find("img").attr("src", pokemonBuscado.imagen);

        actualizarGrafico(arrayStatsPokemon);
    })
    


})