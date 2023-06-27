import styled from 'styled-components';

export const HeaderBg = styled.header`
    @media (min-width: 450px) {
        display: flex;
        gap: 2rem;
    }
    align-items: flex-end;
    padding: 2rem;
    border-bottom: 1px solid #f5ae6d;
`;

export const Logo = styled.div`
    color: #460f0f;
    font-size: 3rem;
    font-family: var(--font-notoSerifKR);
    @media (max-width: 764px) {
        font-size: 2rem;
        font-weight: 900;
    }
`;

export const LogoCont = styled.span`
    color: #460f0f;
    white-space: nowrap;
    font-size: 1.5rem;
    vertical-align: bottom;
    letter-spacing: 1.5rem;
    @media (max-width: 764px) {
        letter-spacing: 1.2rem;
        font-size: 1rem;
    }
`;
