/*
let url = 'https://pokeapi.co/api/v2/pokemon/pikachu'

let pokemonInput = document.querySelector("#pokemonInput");
let searchButton = document.querySelector("#searchButton");

let displayPokemonCards = document.querySelector("#pokemonCard");
let displayPokemonName = document.querySelector("#pokemonName");
let displayPokemonImg = document.querySelector("#pokemonImage");
let displayPokemonType = document.querySelector("#pokemonTypes");
let displayPokemonWeight = document.querySelector("#pokemonWeight");
let displayPokemonHeight = document.querySelector("#pokemonHeight");

let valueInput = pokemonInput.value = ""

searchButton.addEventListener("click", fetchPokemon);

async function fetchPokemon() {

    valueInput = pokemonInput.value;
    console.log(valueInput)  ////

    try {

        const responseBack = await fetch("https://pokeapi.co/api/v2/pokemon");

        if (!responseBack.ok) {

            throw new error(responseBack.status);
        }

        let data = await responseBack.json();

        console.log(data);

        if (valueInput == "") {
            alert('!!!!')
        }

        for (let i = 0; i < data.results.length; i++) {            

            console.log(data.results[i].name);  
            console.log(data.results[i]);                     

            if (valueInput == data.results[i].name) {

                console.log("----------> TROUVÉ");

                displayPokemonCards.classList.add('pokemon-card');
                displayPokemonCards.style.visibility = 'visible';

                displayPokemonName.textContent = data.results[i].name;
                url = data.results[i].url;
                console.log(url);

                url = await fetch(url);
                let dataMore = await url.json();
                console.log(dataMore);

                console.log(dataMore.sprites.back_default);
                displayPokemonImg.setAttribute('src', dataMore.sprites.back_default);

                for (let u = 0; u < dataMore.types.length; u++) {
                    let type = dataMore.types[u].type.name;
                    console.log(type);
                    displayPokemonType.textContent += (type + " ");
                }

                let height = dataMore.height;
                console.log(height);
                displayPokemonHeight.innerHTML = (height + '0' + ' Cm');

                let weight = dataMore.weight;
                console.log(weight);
                displayPokemonWeight.innerHTML = (weight / 10 + ' Kg');

            }
        }

    } catch (error) {

        console.log("Erreur");
    }
}  */




let url = 'https://pokeapi.co/api/v2/pokemon/pikachu'

let pokemonInput = document.querySelector("#pokemonInput");
let searchButton = document.querySelector("#searchButton");

let displayPokemonCards = document.querySelector("#pokemonCard");
let displayPokemonName = document.querySelector("#pokemonName");
let displayPokemonImg = document.querySelector("#pokemonImage");
let displayPokemonType = document.querySelector("#pokemonTypes");
let displayPokemonWeight = document.querySelector("#pokemonWeight");
let displayPokemonHeight = document.querySelector("#pokemonHeight");

let type

let valueInput = pokemonInput.value = ""

searchButton.addEventListener("click", fetchPokemon);

async function fetchPokemon() {

    valueInput = pokemonInput.value;   
    
    console.log(valueInput)  ////

    try {

        const responseBack = await fetch(`https://pokeapi.co/api/v2/pokemon/${valueInput.toLowerCase()}`);

        if (!responseBack.ok) {

            throw new error(responseBack.status);
        }

        let data = await responseBack.json();

        if (valueInput == "") {
            alert('!!!!')
        }
        console.log(data)
        
        
        displayPokemonCards.style.visibility = 'visible';

        console.log(data.name);
        displayPokemonName.textContent = data.name;
        
        console.log(data.sprites.back_default);
        displayPokemonImg.setAttribute('src', data.sprites.back_default);

        displayPokemonType.textContent = ""   

        for (let u = 0; u < data.types.length; u++) {
            type = data.types[u].type.name;                     
            displayPokemonType.textContent += (type + " ");
        }

        let height = data.height;        
        displayPokemonHeight.innerHTML = (height + '0' + ' Cm');

        let weight = data.weight;        
        displayPokemonWeight.innerHTML = (weight / 10 + ' Kg');        

    } catch (error) {

        console.log("Erreur");
    }
} 



        /*for (let i = 0; i < data.results.length; i++) {            

            console.log(data.results[i].name);  
            console.log(data.results[i]);                     

            if (valueInput == data.results[i].name) {

                console.log("----------> TROUVÉ");

                displayPokemonCards.classList.add('pokemon-card');
                displayPokemonCards.style.visibility = 'visible';

                displayPokemonName.textContent = data.results[i].name;
                url = data.results[i].url;
                console.log(url);

                url = await fetch(url);
                let dataMore = await url.json();
                console.log(dataMore);

                console.log(dataMore.sprites.back_default);
                displayPokemonImg.setAttribute('src', dataMore.sprites.back_default);

                for (let u = 0; u < dataMore.types.length; u++) {
                    let type = dataMore.types[u].type.name;
                    console.log(type);
                    displayPokemonType.textContent += (type + " ");
                }

                let height = dataMore.height;
                console.log(height);
                displayPokemonHeight.innerHTML = (height + '0' + ' Cm');

                let weight = dataMore.weight;
                console.log(weight);
                displayPokemonWeight.innerHTML = (weight / 10 + ' Kg');

            }
        }*/