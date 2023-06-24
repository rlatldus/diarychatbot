import styled from 'styled-components';
import { AiFillCaretDown } from 'react-icons/ai';

export const Container = styled.div`
    position: relative;
    width: 20rem;
    border-radius: 6px;
    background-color: #ffffff;
    align-self: center;
    border: 1px solid #ccc;
    z-index: 2;

    border-radius: ${(props) => props.down && '6px 6px 0 0;'};
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
    top: 100%;
    overflow: hidden;
    border-radius: 0px 0px 6px 6px;
    color: black;
    border: 1px solid #ccc;
    border-top: none;
    z-index: 2;
    left: -1px;
    width: 20rem;

    li {
        width: 20rem;
        padding: 1.2rem 0 1.2rem 1.2rem;
        font-size: 1.5rem;
        transition: background-color 0.2s ease-in;
        background: #fff;
        cursor: pointer;
        &:hover {
            background-color: #ffbc9d;
            font-weight: 600;
        }
    }
`;
