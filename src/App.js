import React, { useEffect, useState } from "react";
import PokemonList from "./PokemonList";
import Pagination from "./Pagination";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/ability/?offset=0&limit=20")
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [prevPageUrl, setPrevPageUrl] = useState("");

  const fetchData = async () => {
    const url = currentPageUrl;
    const data = await fetch(url);
    const parsedData = await data.json();
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
      <Pagination
        gotoNextPage={gotoNextPage}
        gotoPrevPage={gotoPrevPage}
      />
    </>
  );
}

export default App;
