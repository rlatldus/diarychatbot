import styled from 'styled-components';

export const ButtonWrapper = styled.div`
    padding: 4rem 0;
    align-items: center;
    display: flex;
    width: 100%;
    @media (min-width: 700px) {
        justify-content: center;
        gap: 2rem;
    }
    @media (max-width: 700px) {
        flex-direction: column;
    }
`;
