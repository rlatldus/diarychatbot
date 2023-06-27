import styled from 'styled-components';

export const LoadingWrapper = styled.div`
    position: fixed;
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
    inset: 0;
    background-color: #ffffff33;
    backdrop-filter: blur(0.5rem);
`;
