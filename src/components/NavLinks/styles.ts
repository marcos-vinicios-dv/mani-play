import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.nav`
  margin-top: 4rem;

  ul {
    list-style: none;

    li {
      display: flex;
      align-items: center;

      & + li {
        margin-top: 1rem;
      }

      svg {
        width: 24px;
        height: 24px;

        color: var(--gray-400);

        margin-right: 1.34rem;
      }
    }
  }

  @media (max-width: 1300px) {
    margin-top: 2.7rem;
  }

  @media (max-width: 900px) {
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      li {
        a {
          order: 1;
        }

        svg {
          order: 2;
          width: 20px;
          height: 20px;

          margin: 0 0 0 1rem;
        }
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
