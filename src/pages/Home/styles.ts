import styled from 'styled-components';

export const Container = styled.main`
  padding: 1.6rem 2.15rem;
  width: 80%;
  height: 100vh;
  overflow-y: auto;

  position: relative;

  h2 {
    color: var(--gray-700);

    margin-top: 2rem;
  }

  > span {
    font-weight: 600;
    color: var(--gray-500);
  }

  > div span {
    position: absolute;
    top: 50%;
    left: 50%;
  }

  ul {
    width: 100%;
    padding: 1rem 0;
  }

  @media (min-width: 1420px) {
    width: 90%;
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 1.35rem;
      margin-top: 1.7rem;
    }

    > span {
      font-size: 0.8rem;
    }

    ul {
      padding: 0.8rem 0;
    }
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;
