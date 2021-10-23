import React, { useEffect, useState } from "react";
import PokemonList from "./components/PokemonList";
import Pagination from "./components/Pagination";
import Spinner from "./components/Spinner";

function App() {
  const [pokemon, setPokemon] = useState([]);
  // https://pokeapi.co/api/v2/pokemon?offset=0&limit=20
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [prevPageUrl, setPrevPageUrl] = useState("");
  const [loading, setLoading] = useState(true);


  const fetchData = async () => {
    const url = currentPageUrl;
    const data = await fetch(url);
    const parsedData = await data.json();
    setLoading(false)
    console.log(parsedData);
    setPokemon(parsedData.results.map(p => p.name));
    setNextPageUrl(parsedData.next)
    setPrevPageUrl(parsedData.previous)
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

  // if (loading === true) return <Spinner />;

  return (
    <div>
      <div className="text-center">
        {loading && <Spinner />}
      </div>

      <PokemonList pokemon={pokemon} loading={loading} />
      <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
    </div>
  );
}

export default App;
