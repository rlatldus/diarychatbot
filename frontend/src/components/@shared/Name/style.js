import styled from 'styled-components';

export const NameCont = styled.p`
    padding: 1rem;
    color: var(--brawn);
    border-bottom: 1px double #f5ae6d;
    border-top: 1px double #f5ae6d;
    border-width: 0.5rem;
    text-align: center;
    font-size: 4rem;
    @media screen and (max-width: 450px) {
        font-size: 3.5rem;
    }
    @media screen and (max-width: 320px) {
        font-size: 3rem;
    }
`;
