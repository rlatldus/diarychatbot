import styled from 'styled-components';

export const StickerAlign = styled.div`
    width: ${(props) => (props.small ? '10rem' : '100%')};
    height: ${(props) => (props.small ? '3.5rem' : '5rem')};
    cursor: ${(props) => (props.small ? 'default' : 'pointer')};
    z-index: ${(props) => props.isSelected && '1'};
    box-shadow: ${(props) => props.isSelected && '0 0 0 4px #ff6b6b'};
    background-color: ${({ color }) => color};
    &:hover {
        ${(props) => !props.small && 'box-shadow: 0 0 0 4px #ff6b6b'};
        z-index: 1;
    }
`;
