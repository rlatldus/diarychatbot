import styled from 'styled-components';

export const ContentWrapper = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 120rem;
    margin: 5rem auto 0;
`;

export const Content = styled.div`
    max-width: 120rem;
    padding: 2rem;
`;

export const LogoCont = styled.p`
    color: #460f0f;
    font-size: 15px;
    vertical-align: bottom;
    width: 100%;
    letter-spacing: 15px;
    text-align: center;
`;

export const RegistLink = styled.span`
    dis
    font-size: 1.2rem;
    margin-top: 4.2rem;
    display: flex;
    justify-content: center;
    & > a {
        font-size: 1.4rem;
        font-weight: bold;
    }
`;
