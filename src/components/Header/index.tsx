import { IoClose } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { useEffect, useState } from 'react';

import { NavLinks } from '../NavLinks';
import Logo from '../../assets/SVG/Logo.svg';

import { Container, ResponsiveSideBar } from './styles';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Container>
      <img src={Logo} alt="Ícone play com text ManiPlay escrito ao lado" />

      <button type="button" onClick={() => setIsOpen(true)}>
        <BiMenu />
      </button>

      <ResponsiveSideBar onClick={() => setIsOpen(false)} isOpen={isOpen}>
        <aside>
          <button type="button" onClick={() => setIsOpen(false)}>
            <IoClose />{' '}
          </button>
          <NavLinks />
        </aside>
      </ResponsiveSideBar>
    </Container>
  );
};
