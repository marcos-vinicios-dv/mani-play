import styled from 'styled-components';

export const SideContainer = styled.aside`
  width: 20%;
  max-width: 288px;
  height: 100vh;

  background-color: var(--gray-50);

  padding: 1.6rem 2.99rem;

  border-right: 2px solid var(--gray-200);

  @media (max-width: 1300px) {
    padding: 1.3rem 2.4rem;

    img {
      width: 140px;
    }
  }

  @media (max-width: 1024px) {
    padding: 1.3rem 2rem;

    img {
      width: 130px;
    }
  }

  @media (max-width: 900px) {
    display: none;
  }
`;
