import styled from 'styled-components';

export const HeaderBg = styled.header`
    @media screen and (min-width: 450px) {
        display: flex;
        gap: 2rem;
    }
    align-items: flex-end;
    padding: 2rem;
    border-bottom: 1px solid #f5ae6d;
`;

export const Logo = styled.div`
    color: var(--brawn);
    font-size: 3rem;
    font-family: var(--font-notoSerifKR);
    @media screen and (max-width: 764px) {
        font-size: 2rem;
        font-weight: 900;
    }
`;

export const LogoCont = styled.span`
    color: var(--brawn);
    font-size: 1.5rem;
    letter-spacing: 1.5rem;
    @media screen and (max-width: 764px) {
        letter-spacing: 1.2rem;
        font-size: 1rem;
    }
    @media screen and (max-width: 575px) {
        max-width: 22rem;
    }
`;
