import styled from 'styled-components';

export const CardContainer = styled.li`
  margin-top: 1rem;
  padding: 1rem 2.95rem;
  width: calc(75vw);
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
`;

export const BoxSub = styled.div``;
