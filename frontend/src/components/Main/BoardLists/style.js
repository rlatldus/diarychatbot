import styled from 'styled-components';

export const BoardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    gap: 5rem 2rem;
    width: 100%;

    @media screen and (min-width: 1280px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (min-width: 1536px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;
