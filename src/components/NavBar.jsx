function NavBar({setPokemonIndex, pokemonIndex, pokemonList}) {
    
    return ( <>
        {pokemonList.map((pokemon, index) => (<button key={pokemon.name} onClick={() => setPokemonIndex(index)}>
        {pokemon.name}
      </button>))}
    
    </> );
}

export default NavBar;