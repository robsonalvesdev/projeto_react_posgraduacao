export const mapperPokemon = mapper

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

function getId(url){
    return url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "")
}

function getImage(id){
    return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" +  id + ".png"
}