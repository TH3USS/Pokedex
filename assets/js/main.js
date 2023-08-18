const pokemonList = document.getElementById(`pokemonList`)
const loadMoreButton = document.getElementById(`loadMoreButton`)

const maxRecords = 151;
const limit = 10;
let offset = 0;

function convertPokemonToLi(pokemon) {
    if(pokemon.number <= 9){
        return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#00${pokemon.number}</span>
            <span class="nome">${pokemon.name}</span> 

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
            <span class="number">#0${pokemon.number}</span>
            <span class="nome">${pokemon.name}</span> 

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${pokemon.number}.png"
                    alt="${pokemon.name}">
            </div>                
        </li>
    `
    } else if(pokemon.number >= 100){
        return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="nome">${pokemon.name}</span> 

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.number}.png"
                    alt="${pokemon.name}">
            </div>                
        </li>
    `
    }
    
}

function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset,limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset,limit)
    }

})
    
