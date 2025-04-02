const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
        imgSrc: "",
    },
];

function PokemonCards() {
    const pokemon = pokemonList[1];

    return (
        <div>
            <h2>{pokemon.name}</h2>
            {pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt={pokemon.name} />) : (<p>???</p>)}
        </div>
    );
}

export default PokemonCards;