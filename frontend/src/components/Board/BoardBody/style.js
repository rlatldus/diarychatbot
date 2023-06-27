import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const BoardBodyBg = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: center;
    padding: 2rem;
    font-family: var(--font-notoSerifKR);

    @media screen and (min-width: 700px) {
        justify-content: center;
        gap: 2rem;
    }
    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`;

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
        transition: all 1s;
    }
`;
