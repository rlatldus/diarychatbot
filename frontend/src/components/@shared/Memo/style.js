import styled from 'styled-components';

export const MemoBg = styled.div`
    flex: 1;
    align-self: stretch;
    @media (min-width: 700px) {
        max-width: 40rem;
    }
    background: #faf7f4;
    box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.12), 0 0.1rem 0.2rem rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
        box-shadow: 0 1.4rem 2.8rem rgba(0, 0, 0, 0.25), 0 1rem 1rem rgba(0, 0, 0, 0.22);
    }
`;
