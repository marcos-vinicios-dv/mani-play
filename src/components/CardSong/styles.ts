import styled from 'styled-components';

export const CardContainer = styled.li`
  margin-top: 1rem;
  padding: 1rem 2.95rem;
  list-style: none;

  background-color: var(--gray-50);

  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0px 12px 30px rgba(73, 72, 73, 0.06);
  border-radius: 10px;

  > span {
    color: var(--gray-700);
    font-weight: 600;
  }
`;

export const BoxMain = styled.div`
  width: 40%;
  display: flex;

  span {
    margin-left: 2.15rem;
    font-weight: 600;
    h3 {
      color: var(--gray-700);
    }

    a {
      color: var(--gray-200);
    }
  }

  img {
    max-width: 76px;
    max-height: 76px;

    border-radius: 5px;
  }
`;

export const BoxSub = styled.div`
  width: 50%;
  font-weight: 600;
  color: var(--gray-400);

  display: flex;
  justify-content: space-between;

  button {
    background: none;
    border: none;

    svg {
      color: var(--gray-400);
      width: 24px;
      height: 24px;
      transition: 0.3s ease;
    }

    &:hover {
      svg {
        color: var(--pink);
      }
    }
  }

  button:last-child {
    svg {
      fill: var(--gray-50);
      stroke: var(--gray-400);
      stroke-width: 1.5;
    }
    &:hover {
      svg {
        fill: var(--pink);
        stroke: var(--pink);
      }
    }
  }
`;
