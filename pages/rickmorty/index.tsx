import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useState } from "react";
import { Character } from "rickmortyapi";
import Filter from "../../components/filter";
import useRickMortyCharacters from "../../components/hooks/useRickMortyCharacters";
import VirtualList from "../../components/virtualList";

const RickMorty = () => {
  const [characters, isLoading] = useRickMortyCharacters();
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);
  const [searchInput, setSearchInput] = useState('');
  const [displayList, setDisplayList] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>()

  const onCharacterSelect = (character: Character) => {
    setSearchInput(character.name);
    setSelectedCharacter(character)
    setDisplayList(false);
  }

  const onSearchChange = (searchValue: string) => {
    setDisplayList(true);
    setSearchInput(searchValue);
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: '100%', marginTop: '20px' }}>
      <Typography variant="h4" sx={{ margin: "15px 0" }}>Rick & Morty character encyclopedia</Typography>
      <Filter
        data={characters}
        isLoading={isLoading}
        searchPath="name"
        setFilteredData={setFilteredCharacters}
        searchValue={searchInput}
        onChange={onSearchChange}
      />
      {filteredCharacters.length > 1 && displayList &&
        <VirtualList
          height={300}
          items={filteredCharacters}
          keyPath={'id'}
          primaryTextPath={'name'}
          secondaryTextPath={'origin.name'}
          onSelect={onCharacterSelect}
        />
      }
      {selectedCharacter &&
        <Card sx={{ display: 'flex', maxWidth: '680px', height: '500px', margin: '60px auto' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '280px' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              {/* Todo improve this */}
              <Typography component="div" variant="h5">
                {selectedCharacter.name}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Species:
              </Typography>
              <Typography component="div" variant="body1">
                {selectedCharacter.species}
              </Typography>
              <br/>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Gender:
              </Typography>
              <Typography component="div" variant="body1">
                {selectedCharacter.gender}
              </Typography>
              <br/>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Origin:
              </Typography>
              <Typography variant="body1" component="div">
                {selectedCharacter.origin.name}
              </Typography>
              <br/>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Status:
              </Typography>
              <Typography component="div" variant="body1">
                {selectedCharacter.status}
              </Typography>
              <br/>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Last known location:
              </Typography>
              <Typography component="div" variant="body1">
                {selectedCharacter.location.name}
              </Typography>
            </CardContent>
          </Box>
          <CardMedia
            sx={{ width: 500 }}
            image={selectedCharacter.image}
            title="green iguana"
          />
        </Card>

      }
    </Box>
  )
};

export default RickMorty;
