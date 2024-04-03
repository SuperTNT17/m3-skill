const pokemonImage = document.getElementById("js--pokemon-image");
let randomNumber = Math.floor(Math.random() * 1025 + 1);
let pokemonName = "";
let randomShiny = Math.floor(Math.random() * 8192);
console.log(randomNumber);
console.log(randomShiny);


let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
    .then(function(response){
        return response.json();
    })
    .then(function(realData){
        pokemonName = realData.name;
        pokemonText.innerText = `A wild ${pokemonName} appeared!`;
        if (randomShiny != 0) {
            pokemonImage.src = realData.sprites.front_default;
        }
        else{
            pokemonText.style.color = "orange";
            pokemonImage.src = realData.sprites.front_shiny;
        }
    });


const catchButton = document.getElementById("js--catch-button");
const pokemonText = document.getElementById("js--pokemon-text");
let pokemonGamePlayed = false;



catchButton.onclick = function(){
    if (pokemonGamePlayed == false) {
        let catchNumber = Math.floor(Math.random() * 2);
        console.log(catchNumber);
        if(catchNumber == 0){
            pokemonText.innerText = `The ${pokemonName} ran away!`;
            pokemonText.style.color = "red";
        }
        else{
            pokemonText.innerText = `The ${pokemonName} has been caught!`;
            pokemonText.style.color = "green";
        }
        pokemonGamePlayed = true;
    }
}