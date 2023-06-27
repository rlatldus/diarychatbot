import styled from 'styled-components';

export const MemoBg = styled.div`
    flex: 1;
    align-self: stretch;
    background: #faf7f4;
    box-shadow: 0 0.1rem 0.3rem #0000001f, 0 0.1rem 0.2rem #0000003d;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    @media screen and (min-width: 700px) {
        max-width: 40rem;
    }
    &:hover {
        box-shadow: 0 1.4rem 2.8rem #00000040, 0 1rem 1rem #00000038;
    }
`;
