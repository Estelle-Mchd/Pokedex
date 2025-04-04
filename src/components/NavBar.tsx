interface Pokemon {
    name: string;
    imgSrc?: string;
}

interface NavBarProps {
    setPokemonName: (name: string) => void;
    pokemonList: Pokemon[];
}

function NavBar({ pokemonList, setPokemonName }: NavBarProps) {
    const handleClick = (pokemonName: string) => {
        if (pokemonName === "pikachu") {
            alert("Pika Pikachu!");
        }
    }
    return (

        <nav>
            {pokemonList.map((pokemon) => (
                <button
                    type="button"
                    key={pokemon.name}
                    onClick={() => {
                        setPokemonName(pokemon.name);
                        handleClick(pokemon.name)
                    }}
                >
                    {pokemon.name}
                </button>
            ))
            }
        </nav >

    );
}

export default NavBar;