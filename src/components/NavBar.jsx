function NavBar({setPokemonIndex, pokemonIndex, pokemonList}) {
    
    return ( <div className="nav">
        {pokemonList.map((pokemon, index) => (<button key={pokemon.name} onClick={() => setPokemonIndex(index)}>
        {pokemon.name}
      </button>))}
    
    </div> );
}

export default NavBar;