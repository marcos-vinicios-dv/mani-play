import styled from 'styled-components';

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
      /* margin: 0 0 0 -2.5rem; */

      & + li {
        margin-top: 1rem;
      }

      span {
        font: 500 1.2rem 'Poppins';
        color: var(--gray-700);
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
