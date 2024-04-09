const pokemonImage = document.getElementById("js--pokemon-image");
const pokemonStorageCard = document.getElementById("js--pokemon-storage");
const pokemonText = document.getElementById("js--pokemon-text");
const pokemonInfoName = document.getElementById("js--pokemon-info-name");
const pokemonInfoTypes = document.getElementById("js--pokemon-info-types");

let randomNumber;
let randomShiny;

let pokemonName = "";
let pokemonId;
let isShiny;
let pokemonTypes = [];

let pokemonStorage = [];

pokemonGame();
function getPokemonInfo() {
    randomNumber = Math.floor(Math.random() * 1025 + 1);
    randomShiny = Math.floor(Math.random() * 8192);
    let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
        .then(function (response) {
            return response.json();
        })
        .then(function (realData) {
            pokemonName = realData.species.name;
            pokemonText.innerText = `A wild ${pokemonName} appeared!`;
            pokemonTypes = realData.types;
            pokemonInfoName.innerText = `#${realData.id} ${realData.species.name}`;
            for (let i = 0; i < pokemonTypes.length; i++) {
                let type = pokemonTypes[i].type.name;
                pokemonInfoTypes.textContent += type;
                pokemonInfoTypes.textContent += " ";
            }
            if (randomShiny != 0) {
                isShiny = false;
                pokemonImage.src = realData.sprites.front_default;
            }
            else {
                isShiny = true;
                pokemonText.style.color = "orange";
                pokemonImage.src = realData.sprites.front_shiny;
            }
        });
}

function pokemonGame() {
    getPokemonInfo();
}

const catchButton = document.getElementById("js--catch-button");
catchButton.onclick = function () {
    let catchNumber = Math.floor(Math.random() * 2);
    console.log(catchNumber);
    if (catchNumber == 0) {
        pokemonText.innerText = `The ${pokemonName} ran away!`;
        pokemonText.style.color = "red";
    }
    else {
        addPokemon(pokemonName);
        pokemonText.innerText = `The ${pokemonName} has been caught!`;
        pokemonText.style.color = "green";
    }
    catchButton.disabled = true;
    catchButton.style.display = "none";
    againButton.style.display = "inline";
}

const againButton = document.getElementById("js--again-button");
againButton.onclick = function () {
    againButton.style.display = "none";
    catchButton.disabled = false;
    pokemonText.style.color = "black";
    catchButton.style.display = "inline";
    pokemonInfoTypes.innerText = "";
    pokemonGame();
}

function addPokemon(pokemonName) {
    pokemonStorage.push(pokemonName);
    let pokemonItem = document.createElement("li");
    pokemonItem.classList.add("js--pokemon-in-storage");

    let pokemonItemTitle = document.createElement("p");
    pokemonItemTitle.innerHTML = pokemonName;

    let pokemonItemImage = document.createElement("img");
    pokemonItemImage.src = pokemonImage.src;
    if (isShiny) {
        pokemonItemTitle.style.color = "orange";
    }

    pokemonItem.appendChild(pokemonItemTitle);
    pokemonItem.appendChild(pokemonItemImage);

    pokemonStorageCard.appendChild(pokemonItem);
}
