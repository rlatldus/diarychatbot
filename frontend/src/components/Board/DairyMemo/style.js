import styled from 'styled-components';

export const Date = styled.div`
    padding: 2rem;
    color: var(--brawn);
    border-bottom: 1px solid #b0b0b0;
    font-size: 2.2rem;
    font-weight: bolder;

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
    padding: 1rem 2rem;
    width: 30%;
    color: var(--brawn);
    font-size: 2.5rem;
    font-weight: bolder;
`;
export const TitleCont = styled.textarea`
    padding: 2rem 0 0 2rem;
    width: 70%;
    background-color: #faf7f4;
    box-sizing: border-box;
    border-left: 1px solid #b0b0b0;
    border-bottom: 1px solid transparent;
    border-top: 1px solid transparent;
    font-size: 1.5rem;
    font-family: var(--font-notoSerifKR);
    resize: none;
    &:focus {
        border: 1px solid var(--amber);
        box-shadow: 0 0 0 0.1rem var(--amber);
        outline: none;
    }
`;

export const Cont = styled.textarea`
    padding: 2rem;
    width: 100%;
    height: 35rem;
    background-color: #faf7f4;
    box-sizing: border-box;
    border: 1px solid transparent;
    border-bottom: 1px solid #b0b0b0;
    font-size: 1.5rem;
    font-family: var(--font-notoSerifKR);
    resize: none;
    overflow: auto;

    &:focus {
        border: 1px solid var(--amber);
        box-shadow: 0 0 0 0.1rem var(--amber);
        outline: none;
    }
`;
export const Text = styled.p`
    padding: 2rem 0 0 2rem;
    color: var(--brawn);
`;
export const Palette = styled.div`
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 2rem;
`;
