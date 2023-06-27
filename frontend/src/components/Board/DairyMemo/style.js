import styled from 'styled-components';

export const Date = styled.div`
    padding: 1rem;
    font-size: 2.5rem;
    font-weight: bolder;
    border-bottom: 1px solid #b0b0b0;
    color: #460f0f;

    & span {
        margin-left: 0.8rem;
        font-size: 1.2rem;
    }
`;
export const TitleBg = styled.div`
    display: flex;
    align-items: center;
    vertical-align: middle;
    border-bottom: 1px solid #b0b0b0;
`;
export const Tilte = styled.label`
    padding: 1rem;
    width: 30%;
    font-size: 2.5rem;
    font-weight: bolder;
    color: #460f0f;
`;
export const TitleCont = styled.textarea`
    padding: 2rem 0 0 1rem;
    width: 70%;
    resize: none;
    font-size: 1.5rem;
    box-sizing: border-box;
    border-left: 1px solid #b0b0b0;
    background-color: #faf7f4;
    border-bottom: 1px solid #fff;
    border-top: 1px solid transparent;
    font-family: var(--font-notoSerifKR);
    &:focus {
        border: 1px solid black;
        outline: none;
        box-shadow: 0 0 0 1px black;
    }
`;

export const Cont = styled.textarea`
    padding: 1rem;
    overflow: auto;
    width: 100%;
    height: 35rem;
    resize: none;
    box-sizing: border-box;
    font-size: 1.5rem;
    font-family: var(--font-notoSerifKR);
    border: 1px solid #b0b0b0;
    background-color: #faf7f4;

    &:focus {
        border: 1px solid black;
        outline: none;
        box-shadow: 0 0 0 1px black;
    }
`;
export const Text = styled.span`
    color: #460f0f;
    padding: 1rem;
`;
export const Palette = styled.div`
    justify-content: space-around;
    display: flex;
    list-style: none;
    padding: 1rem;
`;
