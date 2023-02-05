import useRickMortyCharacters from "../../components/hooks/useRickMortyCharacters";

const RickMorty = () => {
  const [characters, isLoading] = useRickMortyCharacters();
  console.log(characters, isLoading);

  return (
    <>
      Hello world
    </>
  )
};

export default RickMorty;