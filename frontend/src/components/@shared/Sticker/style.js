import styled from 'styled-components';

export const StickerAlign = styled.div`
    width: ${(props) => (props.small ? '10rem' : '14rem')};
    height: ${(props) => (props.small ? '3.5rem' : '5rem')};
    background-color: ${({ stickerColor }) => stickerColor};
`;
