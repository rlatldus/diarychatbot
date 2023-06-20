import styled from 'styled-components';

export const ContentWrapper = styled.main`
    display: flex;
    justify-content: center;
    max-width: 120rem;
    margin: 5rem auto 0;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const LogoCont = styled.span`
    color: #460f0f;
    font-size: 15px;
    vertical-align: bottom;
    padding-left: 10px;
    letter-spacing: 15px;
`;

export const RegistLink = styled.span`
    font-size: 1.2rem;
    margin-top: 4.2rem;

    & > a {
        font-size: 1.4rem;
        font-weight: bold;
    }
`;
