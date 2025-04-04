interface Pokemon {
    name: string;
    imgSrc?: string;
}

interface NavBarProps {
    setPokemonName: (name: string) => void;
    pokemonList: Pokemon[];
}

function NavBar({ pokemonList, setPokemonName }: NavBarProps) {

    return (
        <div>
            <nav>
                {pokemonList.map((pokemon) => (
                    <button type="button" key={pokemon.name} onClick={() => setPokemonName(pokemon.name)}>{pokemon.name}</button>
                ))}
            </nav>
        </div>
    );
};

export default NavBar;