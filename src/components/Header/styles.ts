import styled from 'styled-components';

export const Container = styled.header`
  display: none;
  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1rem 2.15rem;

    > button {
      border: none;
      background: none;

      svg {
        width: 28px;
        height: 28px;
        color: var(--gray-700);
      }
    }
  }
`;

interface ResponsiveSideBarPros {
  isOpen: boolean;
}

export const ResponsiveSideBar = styled.div<ResponsiveSideBarPros>`
  position: fixed;

  transition: opacity 0.5s ease,
    right 0s ease ${({ isOpen }) => (isOpen ? '0' : '0.2s')};
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  z-index: 2;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.2);

  aside {
    width: 50%;
    max-width: 300px;
    height: 100vh;

    margin-left: auto;
    padding: 1rem 2.15rem;

    background-color: var(--gray-50);

    transition: all 0.5s ease;

    position: relative;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};

    button {
      border: none;
      background: none;

      position: absolute;
      left: 2.15rem;

      svg {
        width: 28px;
        height: 28px;

        color: var(--gray-700);
      }
    }
  }
`;
