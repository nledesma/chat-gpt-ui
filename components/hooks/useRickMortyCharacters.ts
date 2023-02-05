import { useEffect, useState } from "react";

const useRickMortyCharacters = () => {
  const [isLoading, setLoading] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        setLoading(true);
        const response = await fetch('/api/rickmorty');

        const json = await response.json();
        // console.log(json);
        setCharacters(json);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    fetchCharacters();
  }, [])

  return [characters, isLoading];
};

export default useRickMortyCharacters;