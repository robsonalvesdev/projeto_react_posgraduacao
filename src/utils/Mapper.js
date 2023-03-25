export const mapperPokemon = mapper
export const mapperDetail = mapperDetailPrivate

function mapper(pokemons){
    const listPokemons=[]
    pokemons.forEach(element => {

        const id = getId(element.url)

        listPokemons.push({
            name: element.name,
            id: id,
            image: getImage(id)

        })
    });

    return listPokemons
}

function mapperDetailPrivate(pokemon){

    const listHabilidades=[]
    pokemon.abilities.forEach(element => {
        listHabilidades.push(element.ability.name)
    })

    const poke = {
        name: pokemon.name,
        habilidades: listHabilidades,
        image: getImage(pokemon.id),
    }

    return poke
}

function getId(url){
    return url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "")
}

function getImage(id){
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +  id + ".png"
}