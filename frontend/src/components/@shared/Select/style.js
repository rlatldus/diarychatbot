import styled from 'styled-components';
import { AiFillCaretDown } from 'react-icons/ai';

export const Container = styled.div`
    position: relative;
    width: 20rem;
    border-radius: o.6rem;
    background-color: #ffffff;
    align-self: center;
    border: 1px solid #ccc;
    z-index: 2;

    border-radius: ${(props) => props.down && '0.6rem 0.6rem 0 0;'};
`;

export const SelectedText = styled.div`
    padding: 0.8rem 1rem;
    font-size: 1.4rem;
    margin-left: 0.5rem;
    cursor: pointer;
`;
export const StyledIcon = styled(AiFillCaretDown)`
    position: absolute;
    top: 25%;
    margin: auto;
    right: 1rem;
    transition: all 0.2s;
    transform: ${(props) => props.down && 'rotate(180deg)'};
`;

export const SelectBox = styled.ul`
    position: absolute;
    z-index: 2;
    left: -1px;
    top: 100%;
    width: 20rem;
    color: black;
    border-radius: 0 0 0.6rem 0.6rem;
    border: 1px solid #ccc;
    border-top: none;
    overflow: hidden;

    li {
        padding: 1.2rem 0 1.2rem 1.2rem;
        width: 20rem;
        background: #fff;
        font-size: 1.5rem;
        cursor: pointer;
        transition: background-color 0.2s ease-in;
        &:hover {
            background-color: #ffbc9d;
            font-weight: 600;
        }
    }
`;
