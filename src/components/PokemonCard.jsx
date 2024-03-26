import PropTypes from "prop-types";

PokemonCard.propTypes ={
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,  //default there are all optionnal, see in protypes docs
  }).isRequired,
}


function PokemonCard({pokemon}) {
  const noImg="???"
    return <>
      {pokemon.imgSrc!==undefined? <img src={pokemon.imgSrc}/> : <p>{noImg}</p>}
      <figcaption>{pokemon.name}</figcaption>
    </>;
  }
  
  export default PokemonCard;