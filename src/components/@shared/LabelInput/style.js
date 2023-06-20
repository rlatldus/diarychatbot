import styled from 'styled-components';

export const Field = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
`;

export const Label = styled.label`
    margin-top: 0.6rem;
    font-size: 1.4rem;
    color: #460f0f;
`;

export const Input = styled.input`
    padding: 1.5rem 1rem;
    margin-top: 0.8rem;
    border-radius: 0.4rem;
    ${(props) => props.errors[props.id] && 'border: 1px solid red;'}

    &:disabled {
        cursor: not-allowed;
        background-color: #e0e0e0;
    }
`;
