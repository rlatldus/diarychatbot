import styled from 'styled-components';

export const StickerAlign = styled.div`
    z-index: ${(props) => props.isSelected && '1'};
    width: ${(props) => (props.small ? '10rem' : '100%')};
    height: ${(props) => (props.small ? '3.5rem' : '5rem')};
    box-shadow: ${(props) => props.isSelected && '0 0 0 0.4rem #ff6b6b'};
    background-color: ${({ color }) => color};
    cursor: ${(props) => (props.small ? 'default' : 'pointer')};
    &:hover {
        ${(props) => !props.small && 'box-shadow: 0 0 0 0.4rem #ff6b6b'};
        z-index: 1;
    }
`;
