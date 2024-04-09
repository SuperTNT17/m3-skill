const pokemonImage = document.getElementById("js--pokemon-image");
const pokemonStorageCard = document.getElementById("js--pokemon-storage");
let randomNumber;
let pokemonName = "";
let randomShiny;
let isShiny;
let pokemonStorage = [];

pokemonGame();
function pokemonGame() {
    randomPokemon = Math.floor(Math.random() * 1025 + 1);
    randomShiny = Math.floor(Math.random() * 8192);
    let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomPokemon)
        .then(function (response) {
            return response.json();
        })
        .then(function (realData) {
            pokemonName = realData.name;
            pokemonText.innerText = `A wild ${pokemonName} appeared!`;
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

const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");
const againButton = document.getElementById("js--again-button");
let pokemonGamePlayed = false;

catchButton.onclick = function () {
    if (pokemonGamePlayed == false) {
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
}

againButton.onclick = function () {
    againButton.style.display = "none";
    catchButton.disabled = false;
    pokemonText.style.color = "black";
    catchButton.style.display = "inline";
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