import { useEffect, useState } from "react";
import { Character } from "rickmortyapi";

const useRickMortyCharacters = (): [Character[], boolean] => {
  const [isLoading, setLoading] = useState(true);
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        setLoading(true);
        const response = await fetch('/api/rickmorty');

        const json: Character[] = await response.json();
        setCharacters(json);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setCharacters([])
      }
    }

    fetchCharacters();
  }, [])

  return [characters, isLoading];
};

export default useRickMortyCharacters;