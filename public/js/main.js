function getPokemon(name) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + name).then((response) => response.json()).then((data) => {
        document.write(data.name)
        document.write(" " + data.id)
        document.write(" attaque 1 " + data.abilities[0].ability.name)
        document.write("<br>");
    }).catch((err) => {
        console.log("pokemon not found", err)
    })
}

//loop that collects all pokemons
for (let index = 1; index < 351; index++) {
    getPokemon(index)
}