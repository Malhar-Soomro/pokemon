import React, { useEffect, useState } from "react";
import PokemonList from "./components/PokemonList";
import Pagination from "./components/Pagination";
import Spinner from "./components/Spinner";
import LoadingBar from 'react-top-loading-bar';


function App() {
  const [pokemon, setPokemon] = useState([]);
  // https://pokeapi.co/api/v2/pokemon?offset=0&limit=20
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=9")
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [prevPageUrl, setPrevPageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0)


  const fetchData = async () => {
    setProgress(0)
    const url = currentPageUrl;
    setProgress(30)
    const data = await fetch(url);
    setProgress(100)
    const parsedData = await data.json();
    setLoading(false)
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
      <LoadingBar
        color='#0000FF'
        progress={progress}
        height={3}
      />
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
