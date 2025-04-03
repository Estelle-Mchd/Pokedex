
interface Pokemons {
    imgSrc: string;
    name: string;
}


function PokemonCards({ imgSrc, name }: Pokemons) {

    return (
        <figure>
            {imgSrc ? (
                <img
                    src={imgSrc}
                    alt={name}
                />
            ) : (
                <p>???</p>
            )}
            <figcaption>{name}</figcaption>
        </figure>
    );
}

export default PokemonCards;