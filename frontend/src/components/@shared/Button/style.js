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
    padding-left: ${(props) => (props.google || props.naver || props.kakao) && '40px'};
    background-color: ${(props) =>
        props.primary
            ? '#FF7549'
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
            : '2px solid #FF7549'};
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
    box-shadow: 0.7rem 0.7rem 0.7rem rgba(80, 29, 0, 0.16);
    font-size: 1.6rem;
    font-weight: 600;
    cursor: pointer;

    &:active {
        background-color: ${(props) =>
            props.primary
                ? ' #f96737'
                : props.google
                ? '#c6251f'
                : props.kakao
                ? '#ffcc01'
                : props.naver
                ? '#1cb501'
                : '#e4ded0'};
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
                : '#e4ded0'};
    }

    &:disabled {
        background-color: #e0e0e0;
        cursor: not-allowed;
    }
`;
