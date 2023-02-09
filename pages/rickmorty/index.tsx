import { Box, Typography } from "@mui/material";
import { Character } from "rickmortyapi";
import Filter from "../../components/filter";
import useFilteredRickMortyCharacters from "../../components/hooks/useFilteredRickMortyCharacters";
import CharacterCard from "../../components/rickmorty/characterCard";
import VirtualList from "../../components/virtualList";

const RickMorty = () => {
  const {
    isLoading,
    characters,
    filteredCharacters,
    searchInput,
    shouldDisplayResults,
    selectedCharacter,
    dispatchAction
  } = useFilteredRickMortyCharacters();

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: '100%', paddingTop: '20px' }}>
      <Typography variant="h4" sx={{ margin: "15px 0", color: 'palette.text.primary' }}>Rick & Morty character encyclopedia</Typography>
      <Filter
        data={characters}
        isLoading={isLoading}
        searchPath="name"
        setFilteredData={(filteredData: Character[]) => dispatchAction({ type: 'FILTER_UPDATE', payload: filteredData})}
        searchValue={searchInput}
        onChange={(newSearch: string) => dispatchAction({ type: 'SEARCH_CHANGE', payload: newSearch})}
      />
      {filteredCharacters.length > 0 && shouldDisplayResults &&
        <VirtualList
          height={300}
          items={filteredCharacters}
          keyPath={'id'}
          primaryTextPath={'name'}
          secondaryTextPath={'origin.name'}
          onSelect={(selected) => dispatchAction({ type: 'SELECT_CHARACTER', payload: selected })}
        />
      }
      {selectedCharacter &&
        <CharacterCard character={selectedCharacter}/>
      }
    </Box>
  )
};

export default RickMorty;
