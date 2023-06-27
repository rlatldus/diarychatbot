import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const BoardBodyBg = styled.div`
    font-family: var(--font-notoSerifKR);
    padding: 2rem;
    align-items: center;
    display: flex;
    gap: 2rem;
    justify-content: center;

    @media (min-width: 700px) {
        justify-content: center;
        gap: 2rem;
    }
    @media (max-width: 700px) {
        flex-direction: column;
    }
`;

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
        transition: all 1s;
    }
`;
