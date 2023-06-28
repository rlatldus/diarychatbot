import styled from 'styled-components';

export const ContentWrapper = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5rem auto 0;
    max-width: 120rem;
`;

export const Content = styled.div`
    padding-bottom: 2rem;
    max-width: 120rem;
`;

export const LogoCont = styled.p`
    vertical-align: bottom;
    padding-bottom: 2rem;
    width: 100%;
    color: #460f0f;
    letter-spacing: 1.5rem;
    text-align: center;
    font-size: 1.5rem;
    @media screen and (max-width: 495px) {
        max-width: 30rem;
    }
`;

export const RegistLink = styled.span`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 4.2rem;
    font-size: 1.2rem;

    & > a {
        font-size: 1.4rem;
        font-weight: bold;
    }
`;
