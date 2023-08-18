const pokemonList = document.getElementById(`pokemonList`)
const pokeAtributos = document.getElementById(`pokeAtributos`)
const loadMoreButton = document.getElementById(`loadMoreButton`)

const maxRecords = 151;
const limit = 1;
let offset = 0;

function convertPokemonToLi(pokemon) {
    if(pokemon.number <= 9){
        return `      
        <li class="pokemon ${pokemon.type}">
            <h1 class="nome">${pokemon.name}</h1>
            <span class="number">#00${pokemon.number}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${pokemon.number}.png"
                alt="${pokemon.name}">
            </div>               
        </li>
    `
    } else if(pokemon.number <= 99){
        return `
        <li class="pokemon ${pokemon.type}">
            <h1 class="nome">${pokemon.name}</h1>
            <span class="number">#00${pokemon.number}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${pokemon.number}.png"
                alt="${pokemon.name}">
            </div>               
        </li>
    `
    } else if(pokemon.number >= 100){
        return `
        <li class="pokemon ${pokemon.type}">
            <h1 class="nome">${pokemon.name}</h1>
            <span class="number">#00${pokemon.number}</span>
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${pokemon.number}.png"
                alt="${pokemon.name}">
            </div>               
        </li>
    `
    }
    
}

function convertPokemonToAtri(pokemon) {
    if(pokemon.number <= 9){
        return `        
        <li class="pokemon_Atri">
            <h1 class="nome_Atri">${pokemon.name}</h1>
                <ol class="stats">
                    ${pokemon.stats.map((stat) => `<li class="stat ${stat}">${stat}</li>`).join('')}
                    
            </div>               
        </li>
    `
    }
    
}

function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        const htmlNew = pokemons.map(convertPokemonToAtri).join('')
        pokemonList.innerHTML += newHtml
        pokeAtributos.innerHTML += htmlNew
    })
}

loadPokemonItens(offset,limit)