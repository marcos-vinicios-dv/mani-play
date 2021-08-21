import styled, { css } from 'styled-components';

type CardContainerProps = {
  isPlaying: boolean;
};

export const CardContainer = styled.li<CardContainerProps>`
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

  animation: FadeBottomTop 1s cubic-bezier(0.075, 0.82, 0.165, 1) both;

  @keyframes FadeBottomTop {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  transition: background-color 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  ${({ isPlaying }) =>
    isPlaying &&
    css`
      background-color: var(--pink);
      box-shadow: 0px 12px 30px rgba(239, 108, 226, 0.2);
      div span {
        color: var(--gray-200);

        h3 {
          color: var(--white);
        }
      }

      > span {
        color: var(--gray-50);
      }

      div button {
        svg {
          color: var(--gray-200);
        }

        &:hover {
          svg {
            color: var(--gray-200);
          }
        }
      }
    `}
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

  span:first-child {
    flex: 1;
    margin-right: 1rem;
  }

  button {
    background: none;
    border: none;
    margin-left: 6rem;

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
`;

type ButtonFavoriteProps = CardContainerProps & {
  isFavorite: boolean;
};

export const ButtonFavorite = styled.button<ButtonFavoriteProps>`
  svg {
    fill: ${(props) => (props.isFavorite ? 'var(--pink)' : 'var(--gray-50)')};
    stroke: ${(props) =>
      props.isFavorite ? 'var(--pink)' : 'var(--gray-400)'};
    stroke-width: 1.5;
  }
  &:hover {
    svg {
      fill: var(--pink);
      stroke: var(--pink);
    }
  }

  ${(props) =>
    props.isPlaying &&
    props.isFavorite &&
    css`
      svg {
        fill: var(--gray-200);
        stroke: var(--gray-200);
      }

      &:hover {
        svg {
          fill: var(--gray-200);
          stroke: var(--gray-200);
        }
      }
    `}

  ${(props) =>
    props.isPlaying &&
    !props.isFavorite &&
    css`
      svg {
        fill: var(--pink);
        stroke: var(--gray-200);
      }

      &:hover {
        svg {
          fill: var(--gray-200);
          stroke: var(--gray-200);
        }
      }
    `}
`;
