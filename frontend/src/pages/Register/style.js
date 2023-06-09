import styled from 'styled-components';
import { Form } from 'react-router-dom';

export const RegistBg = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #ffe0c2;
`;

export const ContentWrapper = styled.main`
    display: flex;
    align-items: start;
    flex-direction: column;
    max-width: 42rem;
    margin: 5rem auto 0;
`;

export const Title = styled.h2`
    font-size: 3rem;
    text-align: left;
`;

export const StyleForm = styled(Form)`
    margin-top: 2rem;
`;
