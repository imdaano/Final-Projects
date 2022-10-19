const pokemonContainer = document.querySelector(".pokemon-container");
const spinner = document.querySelector("#spinner");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

 
// const addEventListener = () => {
//   const searchInput = document.querySelector ('.search-container input');
//   searchInput.addEventListener ('input', search);
   
  
// }

 
// const search = (event) => {
//   const value = event.target.value;

//   const filtered = getPokemon.filter(pokemon => pokemon.name.includes (value));
//   console.log(filtered);
  
// };

/* 
const search = (value) => {
  const filteredPokemon = getPokemon.filter ( pokemon => {
    const filteredPokemonByName = pokemon.name.includes(value);
    const filteredPokemonByID = pokemon.id == (value);
    const filteredPokemonByType = pokemon.types[0].type.name.includes(value);
    return filteredPokemonByName || filteredPokemonByID || filteredPokemonByType;
  });

  createPokemon(filteredPokemon);
}

const filter = () => {
  input$$.addEventListener ('input', (e) => search(e.target.value));
} */

let limit = 14;
let offset = 1;

previous.addEventListener("click", () => {
  if (offset != 1) {
    offset -= 15;
    removeChildNodes(pokemonContainer);
    getPokemons(offset, limit);
  }
});

next.addEventListener("click", () => {
  offset += 15;
  removeChildNodes(pokemonContainer);
  getPokemons(offset, limit);
});


function getPokemon(id) {                                  //traer pokemons
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .then((data) => {
      createPokemon(data);                 
      spinner.style.display = "none";
    });
}

function getPokemons(offset, limit) {    
  spinner.style.display = "block";
  for (let i = offset; i <= offset + limit; i++) {
    getPokemon(i);
  }
}

const search = (event) => {
  const value = event.target.value;

  const filtered = getPokemons.filtered(pokemon => pokemon.name.includes(value));
  createPokemon (filtered);
}


function createPokemon(pokemon) {                           // pintar pokemons en tarjetas
  const flipCard = document.createElement("div");
  flipCard.classList.add("flip-card");

  const cardContainer = document.createElement("div");
  cardContainer.classList.add("card-container");

  flipCard.appendChild(cardContainer);

  const card = document.createElement("div");
  card.classList.add("pokemon-block");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");

  const sprite = document.createElement("img");               // imagen del pokemon
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  const number = document.createElement("p");
  number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon.name;

  const type = document.createElement ("div");
  type.classList.add ("typePokemons");
  type.textContent = pokemon.types[0].type.name;

  

  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);
  card.appendChild(type);

  const cardBack = document.createElement("div");
  cardBack.classList.add("pokemon-block-back");

  cardBack.appendChild(progressBars(pokemon.stats));

  cardContainer.appendChild(card);
  cardContainer.appendChild(cardBack);
  pokemonContainer.appendChild(flipCard);
}


function progressBars(stats) {
  const statsContainer = document.createElement("div");
  statsContainer.classList.add("stats-container");

  for (let i = 0; i < 4; i++) {
    const stat = stats[i];

    const statPercent = stat.base_stat / 2 + "%";
    const statContainer = document.createElement("stat-container");
    statContainer.classList.add("stat-container");

    const statName = document.createElement("p");
    statName.textContent = stat.stat.name;

    const progress = document.createElement("div");
    progress.classList.add("progress");

    const progressBar = document.createElement("div");
    progressBar.classList.add("progress-bar");
    progressBar.setAttribute("aria-valuenow", stat.base_stat);
    progressBar.setAttribute("aria-valuemin", 0);
    progressBar.setAttribute("aria-valuemax", 200);
    progressBar.style.width = statPercent;

    progressBar.textContent = stat.base_stat;

    progress.appendChild(progressBar);
    statContainer.appendChild(statName);
    statContainer.appendChild(progress);

    statsContainer.appendChild(statContainer);
  }

  return statsContainer;
}

function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

getPokemons(offset, limit);


// PENDIENTES DE MEJORA:

// ENLAZAR BUSCADOR || ENUMERAR PAGINAS DE BUSQUEDA 

// INTENTOS DE BUSCADOR Y PINTAR TYPES


/* function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
} */
// let pokemonCharacters = [];
// const api = () => { 
//   const res = fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//   pokemonCharacters = res.json();

//   console.log(pokemonCharacters);
// }
// console.log(api);



// const divType = document.getElementsByClassName('typePokemons');

// if (divType.textContent.includes("grass")) {
//   divType.style.backgroundColor = 'green';
// } else if (type.textContent == 'fighting') {
  
// } else if (type.textContent == 'flying') {
  
// } else if (type.textContent == 'poison') {
  
// } else if (type.textContent == 'ground') {
  
// } else if (type.textContent == 'rock') {
  
// } else if (type.textContent == 'bug') {
  
// } else if (type.textContent == 'ghost') {
  
// } else if (type.textContent == 'steel') {
  
// } else if (type.textContent == 'fire') {
  
// } else if (type.textContent == 'water') {
  
// }  else if (type.textContent == 'electric') {
  
// } else if (type.textContent == 'psychic') {
  
// } else if (type.textContent == 'ice') {
  
// } else if (type.textContent == 'dragon') {
  
// } else if (type.textContent == 'dark') {
  
// } else if (type.textContent == 'fairy') {
  
// } else if (type.textContent == 'uknown') {
  
// } else if (type.textContent == 'shadow') {
  
// } 
