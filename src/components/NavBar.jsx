function NavBar({setPokemonIndex, pokemonIndex, pokemonList}) {
    const handleClick = () => {
        setPokemonIndex(pokemonIndex+1)
      }
    
      const pClick = () => {
        setPokemonIndex(pokemonIndex-1)
      }
    
    return ( <>
      {pokemonIndex>0? <button onClick={pClick}>precedent</button> : ""}
      {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleClick}>suivant</button> : ""}
    
    </> );
}

export default NavBar;