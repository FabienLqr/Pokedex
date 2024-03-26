
function PokemonCard({pokemon}) {
  const noImg="???"
    return <>
      {pokemon.imgSrc!==undefined? <img src={pokemon.imgSrc}/> : <p>{noImg}</p>}
      <figcaption>{pokemon.name}</figcaption>
    </>;
  }
  
  export default PokemonCard;