import { BiHomeAlt, BiHeart } from 'react-icons/bi';

import Logo from '../../assets/SVG/Logo.svg';

import { SideContainer, NavLinks } from './styles';

export const SideBar = () => {
  return (
    <SideContainer>
      <img src={Logo} alt="Ícone play com text ManiPlay escrito ao lado" />

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
