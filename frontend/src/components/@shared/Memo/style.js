import styled from 'styled-components';

export const MemoBg = styled.div`
    height: 60rem;
    @media (max-width: 65rem) {
        margin: 8rem auto 2rem;
    }
    margin: 4rem 2rem;
    background: #faf7f4;
    box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.12), 0 0.1rem 0.2rem rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    max-width: 44rem;
    &:hover {
        box-shadow: 0 1.4rem 2.8rem rgba(0, 0, 0, 0.25), 0 1rem 1rem rgba(0, 0, 0, 0.22);
    }
`;
