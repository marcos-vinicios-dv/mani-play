import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideContainer = styled.aside`
  width: 20%;
  max-width: 288px;
  height: 100vh;

  background-color: var(--gray-50);

  padding: 1.6rem 2.99rem;

  border-right: 2px solid var(--gray-200);
`;

export const NavLinks = styled.nav`
  margin-top: 4rem;

  ul {
    list-style: none;

    li {
      display: flex;
      align-items: center;

      & + li {
        margin-top: 1rem;
      }

      span {
      }

      svg {
        width: 24px;
        height: 24px;

        color: var(--gray-400);

        margin-right: 1.34rem;
      }
    }
  }
`;

type RouterLinkProps = {
  active: number;
};

export const RouterLink = styled(Link)<RouterLinkProps>`
  font: 500 1.2rem 'Poppins';
  color: ${({ active }) => (active ? 'var(--pink)' : 'var(--gray-700)')};
`;
