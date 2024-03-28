import PokemonCard from "./components/PokemonCard"
import NavBar from "./components/NavBar";
import { useState } from "react";

const pokemonList = [
  {
      name: "Bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      number: "	N°001",
    },
    {
      name: "Ivysaur",
      imgSrc:
        "https://th.bing.com/th/id/OIP.3pUj1LEILad8RJRUObiaJwHaGM?rs=1&pid=ImgDetMain",
        number: "N°002",
    },
    {
      name: "Venusaur",
      imgSrc:
        "https://pm1.narvii.com/7100/7085a79add2af208bf7ed725675e35c332c8a954r1-1280-1280v2_00.jpg",
        number: "N°003",
    },
    {
      name: "Charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        number: "N°004",
    },
    {
      name: "Charmeleon",
      imgSrc: "https://th.bing.com/th/id/OIP.U5ueV8tolVwa0jJSXfGHrQAAAA?rs=1&pid=ImgDetMain",
      number: "N°005",
    },
    {
      name: "Charizard",
      imgSrc: "https://i.pinimg.com/474x/e1/bd/02/e1bd023599e49aa88cdaf18cb5663327.jpg",
      number: "N°006",
    },
    {
      name: "Squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        number: "N°007",
    },
    {
      name: "Wartortle",
      imgSrc: "https://www.pokepedia.fr/images/thumb/2/2a/Carabaffe-RFVF.png/500px-Carabaffe-RFVF.png",
      number: "N°008",
    },
    {
      name: "Blastoise",
      imgSrc: "https://i.pinimg.com/originals/9b/46/cc/9b46cc880a28378a8263137b3fbedbe2.png",
      number: "N°009",
    },
    {
      name: "Pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "Mew",
    },
  ];

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <>
      <PokemonCard pokemon= {pokemonList[pokemonIndex]}/>
      <NavBar setPokemonIndex={setPokemonIndex} pokemonIndex={pokemonIndex} pokemonList={pokemonList}/>
    </>
  );
}

export default App;