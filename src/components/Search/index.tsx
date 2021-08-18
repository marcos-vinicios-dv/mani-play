import { BiSearch } from 'react-icons/bi';

import { SearchContainer } from './styles';

export const SearchBar = () => {
  return (
    <SearchContainer>
      <BiSearch />
      <input type="text" placeholder="Álbum, Artista ou Título" />
    </SearchContainer>
  );
};
