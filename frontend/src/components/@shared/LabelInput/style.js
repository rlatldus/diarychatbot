import styled from 'styled-components';

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    & > p {
        color: red;
        font-size: 1.4rem;
    }
`;

export const Label = styled.label`
    margin-top: 0.6rem;
    color: #460f0f;
    font-size: 1.4rem;
`;

export const Input = styled.input`
    ${(props) => props.errors[props.id] && 'border: 1px solid red;'}
    margin-top: 0.8rem;
    padding: 1.5rem;
    border-radius: 0.4rem;

    &:disabled {
        background-color: #e0e0e0;
        cursor: not-allowed;
    }
`;
