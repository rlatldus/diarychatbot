import styled from 'styled-components';

export const ButtonWrapper = styled.div`
    align-items: center;
    display: flex;
    padding: 2rem;
    width: 100%;
    @media screen and (min-width: 700px) {
        justify-content: center;
        gap: 2rem;
    }
    @media screen and (max-width: 700px) {
        flex-direction: column;
    }
`;
