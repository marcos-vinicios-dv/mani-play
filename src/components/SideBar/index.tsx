import { BiHomeAlt, BiHeart } from 'react-icons/bi';

import Logo from '../../assets/SVG/Logo.svg';

import { SideContainer, NavLinks } from './styles';

export const SideBar = () => {
  return (
    <SideContainer>
      <img src={Logo} alt="Ícone play com text ManiPlay escrito ao lado" />

      {/* Passar is Active para link router e verificar no styled par mudar cor de texto */}

      <NavLinks>
        <ul>
          <li>
            <BiHomeAlt />
            <span>Home</span>
          </li>
          <li>
            <BiHeart />
            <span>Favoritos</span>
          </li>
        </ul>
      </NavLinks>
    </SideContainer>
  );
};
