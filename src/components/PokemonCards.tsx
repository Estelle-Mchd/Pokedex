
interface Pokemons {
    imgSrc?: string;
    name: string;
}
interface PokemonCardsInterface {
    pokemon: Pokemons
}

function PokemonCards({ pokemon }: PokemonCardsInterface) {

    return (
        <figure>
            {pokemon.imgSrc ? (
                <img
                    src={pokemon.imgSrc}
                    alt={pokemon.name}
                />
            ) : (
                <p>???</p>
            )}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}

export default PokemonCards;