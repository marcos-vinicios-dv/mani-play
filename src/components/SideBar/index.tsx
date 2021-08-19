import { BiHomeAlt, BiHeart } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';

import Logo from '../../assets/SVG/Logo.svg';

import { SideContainer, NavLinks, RouterLink } from './styles';

export const SideBar = () => {
  const { pathname } = useLocation();

  return (
    <SideContainer>
      <img src={Logo} alt="Ícone play com text ManiPlay escrito ao lado" />

      <NavLinks>
        <ul>
          <li>
            <BiHomeAlt />
            <RouterLink to="/" active={pathname === '/' ? 1 : 0}>
              Home
            </RouterLink>
          </li>
          <li>
            <BiHeart />
            <RouterLink
              to="/favorites"
              active={pathname === '/favorites' ? 1 : 0}
            >
              Favoritos
            </RouterLink>
          </li>
        </ul>
      </NavLinks>
    </SideContainer>
  );
};
