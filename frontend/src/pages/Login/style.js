import styled from 'styled-components';
import { Form } from 'react-router-dom';
import { NameCont } from '../../components/@shared/Name/style';

export const LoginBg = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #ffe0c2;
`;

export const HeaderWrapper = styled.div`
    padding-top: 11rem;
`;

export const TitleName = styled(NameCont)`
    font-family: var(--font-notoSerifKR);
`;

export const LogoCont = styled.span`
    color: #460f0f;
    font-size: 15px;
    vertical-align: bottom;
    padding-left: 10px;
    letter-spacing: 15px;
`;

export const ContentWrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 120rem;
    margin: 5rem auto 0;
`;

export const StyleForm = styled(Form)`
    margin-top: 2rem;
`;

export const RegistLink = styled.span`
    font-size: 1.2rem;
    margin-top: 4.2rem;

    & > a {
        font-size: 1.4rem;
        font-weight: bold;
    }
`;
