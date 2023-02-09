import { useReducer } from "react";
import { Character } from "rickmortyapi";
import useRickMortyCharacters from "./useRickMortyCharacters";


interface RickMortyFilterState {
  filteredCharacters: Character[],
  searchInput: string,
  shouldDisplayResults: boolean,
  selectedCharacter: Character | null
}

const initialState = {
  filteredCharacters: [],
  searchInput: '',
  shouldDisplayResults: false,
  selectedCharacter: null
};

type RickMortyAction = {
  type: 'SELECT_CHARACTER',
  payload: Character
} | {
  type: 'SEARCH_CHANGE',
  payload: string
} | {
  type: 'FILTER_UPDATE',
  payload: Character[]
}

const reducer = (state: RickMortyFilterState, action: RickMortyAction): RickMortyFilterState => {
  const { type, payload } = action;
  switch(type) {
    case 'SELECT_CHARACTER':
      return { ...state, searchInput: payload.name, selectedCharacter: payload, shouldDisplayResults: false }
    case 'SEARCH_CHANGE':
      return { ...state, searchInput: payload, shouldDisplayResults: true }
    case 'FILTER_UPDATE':
      return { ...state, filteredCharacters: payload }
  }
}

const useFilteredRickMortyCharacters = () => {
  const [characters, isLoading] = useRickMortyCharacters();
  const [{
    filteredCharacters,
    searchInput,
    shouldDisplayResults,
    selectedCharacter
  }, dispatchAction] = useReducer(reducer, initialState);

  return {
    isLoading,
    characters,
    filteredCharacters,
    searchInput,
    shouldDisplayResults,
    selectedCharacter,
    dispatchAction
  }
}

export default useFilteredRickMortyCharacters;
