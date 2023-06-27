import styled from 'styled-components';

export const NameCont = styled.p`
    text-align: center;
    padding: 10px;
    color: #460f0f;
    border-bottom: 1px double #f5ae6d;
    border-top: 1px double #f5ae6d;
    border-width: 5px;
    font-size: 4rem;
    @media (max-width: 450px) {
        font-size: 3.5rem;
    }
    @media (max-width: 320px) {
        font-size: 3rem;
    }
`;
