import styled from 'styled-components';
import googleIMG from '../../../assets/google.png';
import kakaoIMG from '../../../assets/kakao.png';
import naverIMG from '../../../assets/naver.png';

export const ButtonBg = styled.div`
    margin: ${(props) => props.margin};
    width: ${(props) => props.small && '30rem'};
    padding: 1rem 0;
`;

export const ButtonShadow = styled.div`
    max-width: ${(props) => (props.small ? '30rem' : '40rem')};
    position: relative;
    height: 4.5rem;
    box-shadow: -0.3rem -0.3rem 0.7rem white;
    border-radius: 2.4rem;
`;

export const ButtonCont = styled.button`
    padding-left: ${(props) => (props.google || props.naver || props.kakao) && '4rem'};
    background-color: ${(props) =>
        props.primary
            ? 'var(--amber)'
            : props.google
            ? '#CC3731'
            : props.kakao
            ? '#FFEA01'
            : props.naver
            ? '#1FC702'
            : 'white'};
    color: ${(props) => (props.primary || props.google || props.naver ? 'white' : '#371F21')};
    border: ${(props) =>
        props.google
            ? '1px solid #7F2318'
            : props.kakao
            ? '1px solid #F0C99A'
            : props.naver
            ? '1px solid #3F9324'
            : '2px solid var(--amber)'};
    background-image: ${(props) =>
        props.google
            ? `url(${googleIMG})`
            : props.kakao
            ? `url(${kakaoIMG})`
            : props.naver
            ? `url(${naverIMG})`
            : 'none'};
    position: absolute;
    left: 0;
    width: 100%;
    height: 4.5rem;
    border-radius: 2.4rem;
    background-repeat: no-repeat;
    background-position: 20% center;
    background-size: 7%;
    box-shadow: 0.7rem 0.7rem 0.7rem #501d0029;
    font-size: 1.6rem;
    font-weight: 600;
    cursor: pointer;

    &:active {
        font-size: 1.7rem;
    }

    &:hover {
        background-color: ${(props) =>
            props.primary
                ? '#e74813'
                : props.google
                ? '#980a05'
                : props.kakao
                ? '#f3c200'
                : props.naver
                ? '#169500'
                : '#f4e4d6'};
    }

    &:disabled {
        background-color: #f4e4d6;
        cursor: not-allowed;
    }
`;
