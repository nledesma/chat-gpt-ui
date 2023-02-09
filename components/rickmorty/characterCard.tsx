import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { Character } from "rickmortyapi"

interface CharacterCardProps {
  character: Character
}

const getCharacterDetail = (title: string, value: string) => (
  <>
    <Typography variant="subtitle1" color="text.secondary" component="div">
      {title}:
    </Typography>
    <Typography component="div" variant="body1">
      {value}
    </Typography>
    <br/>
  </>
);

const CharacterCard = ({ character }: CharacterCardProps) => (
  <Card sx={{ display: 'flex', maxWidth: '680px', height: '500px', margin: '60px auto' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '280px' }}>
      <CardContent sx={{ flex: '1 0 auto' }}>
        {/* Todo improve this */}
        <Typography component="div" variant="h5">
          {character.name}
        </Typography>
        {[
          ['Species', character.species],
          ['Gender', character.gender],
          ['Origin', character.origin.name],
          ['Status', character.status],
          ['Last known location', character.location.name]
        ].map(detailTuple => getCharacterDetail(detailTuple[0], detailTuple[1]))}
      </CardContent>
    </Box>
    <CardMedia
      sx={{ width: 500 }}
      image={character.image}
      title="green iguana"
    />
  </Card>
)

export default CharacterCard;
