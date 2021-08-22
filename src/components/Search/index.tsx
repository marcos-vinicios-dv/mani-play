import { useEffect, useRef } from 'react';
import { BiSearch } from 'react-icons/bi';

import { SearchContainer } from './styles';

interface SearchBarProps {
  onSearch: (value: string) => Promise<void>;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const inputSearch = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputSearch.current.addEventListener('keyup', (e) => {
      if (e.key === 'Enter' && inputSearch.current.value !== '') {
        onSearch(inputSearch.current.value);
      }
    });
  }, [onSearch]);

  return (
    <SearchContainer>
      <input
        ref={inputSearch}
        type="text"
        placeholder="Álbum, Artista ou Título"
      />
      <button type="button">
        <BiSearch />
      </button>
    </SearchContainer>
  );
};
