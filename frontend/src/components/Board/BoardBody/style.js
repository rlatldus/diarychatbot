import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const BoardBodyBg = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 44rem;
    @media (min-width: 65rem) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    font-family: var(--font-notoSerifKR);
`;

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${({ backgroundColor }) => backgroundColor || 'white'};
        transition: all 1s;
    }
`;
