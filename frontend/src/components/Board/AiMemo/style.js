import styled from 'styled-components';

export const Cont = styled.div`
    padding: 1rem;
    min-height: 25rem;
    width: 100%;
`;

export const ScoreBg = styled.div`
    text-align: center;
    min-height: 25rem;
    @media (min-width: 65rem) {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
`;
export const Score = styled.div`
    font-size: 7rem;
    font-weight: bolder;
    color: #ff6a49;
    @media (min-width: 65rem) {
        min-width: 15rem;
    }
`;
export const Icon = styled.img`
    height: 18rem;
`;
