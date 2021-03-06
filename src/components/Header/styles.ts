import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 70px;

    z-index: 1;

    position: fixed;

    background-color: ${theme.colors.primary};
    color: ${theme.colors.text};

    border-bottom: 5px solid ${theme.colors.info};

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
