import React, { useEffect, useState } from "react";
import PokemonList from "./components/PokemonList";
import Pagination from "./components/Pagination";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemon, setPokemon] = useState([]);
  // https://pokeapi.co/api/v2/pokemon?offset=0&limit=20
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [prevPageUrl, setPrevPageUrl] = useState("");

  const fetchData = async () => {
    const url = currentPageUrl;
    const data = await fetch(url);
    const parsedData = await data.json();
    console.log(parsedData);
    setPokemon(parsedData.results.map(p => p.name));
    setNextPageUrl(parsedData.next)
    setPrevPageUrl(parsedData.previous)
    // console.log(parsedData);
  }


  const gotoPrevPage = () => {
    setCurrentPageUrl(prevPageUrl);
  }

  const gotoNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  }

  useEffect(() => {
    fetchData();
  }, [currentPageUrl]);
  return (

    <>
      <PokemonList pokemon={pokemon} />
      {/* <img src="https://img.pokemondb.net/artwork/large/ivysaur.jpg" alt="" /> */}
      <Pagination
        gotoNextPage={gotoNextPage}
        gotoPrevPage={gotoPrevPage}
      />
    </>
  );
}

export default App;
