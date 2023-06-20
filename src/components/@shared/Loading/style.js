import styled from 'styled-components';

export const LoadingWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    inset: 0;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(5px);
    z-index: 1000;
`;
