import styled from 'styled-components';

export const AccessDeniedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f9f9f9;
`;

export const AccessDeniedTitle = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: #ff3860;
`;

export const AccessDeniedMessage = styled.p`
    font-size: 1.2rem;
    color: #333;
`;
