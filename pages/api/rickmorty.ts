import type { NextApiRequest, NextApiResponse } from 'next'
// import { Character, getCharacters } from 'rickmortyapi';
import rickMortyCharacters from '../../data/rickmortycharacters.json'

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  /* Preventing querying the univers of characters. Its a public API. No need to burst requests */
  // let characters: Character[] = []
  // let pendingPages = true;
  // let page = 1;

  // while (pendingPages) {
  //   const currPage = await getCharacters({ page });
  //   pendingPages = !!currPage.data.info?.next;
  //   if (currPage.data.results) {
  //     characters = [...characters, ...currPage.data.results]
  //   }
  //   page++;
  // }
  res.status(200).json(rickMortyCharacters);
}
