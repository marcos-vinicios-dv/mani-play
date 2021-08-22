import Logo from '../../assets/SVG/Logo.svg';
import { NavLinks } from '../NavLinks';

import { SideContainer } from './styles';

export const SideBar = () => {
  return (
    <SideContainer>
      <img src={Logo} alt="Ícone play com text ManiPlay escrito ao lado" />

      <NavLinks />
    </SideContainer>
  );
};
