import { BiHomeAlt, BiHeart } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';

import { Container, RouterLink } from './styles';

export const NavLinks = () => {
  const { pathname } = useLocation();

  return (
    <Container>
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
    </Container>
  );
};
