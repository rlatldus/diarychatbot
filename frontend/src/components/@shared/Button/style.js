import styled from 'styled-components';
import googleIMG from '../../../assets/google.jpg';
import kakaoIMG from '../../../assets/kakao.jpg';
import naverIMG from '../../../assets/naver.jpg';

export const ButtonBg = styled.div`
    padding: 1rem;
    margin: ${(props) => props.margin};
`;

export const ButtonShadow = styled.div`
    position: relative;
    width: ${(props) => (props.small ? '30rem' : '40rem')};
    height: 4rem;
    box-shadow: -0.3rem -0.3rem 0.7rem white;
    border-radius: 2.4rem;
`;

export const ButtonCont = styled.button`
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
    position: absolute;
    width: ${(props) => (props.small ? '30rem' : '40rem')};
    background-image: ${(props) =>
        props.google
            ? `url(${googleIMG})`
            : props.kakao
            ? `url(${kakaoIMG})`
            : props.naver
            ? `url(${naverIMG})`
            : 'none'};
    background-repeat: no-repeat;
    background-position: 10rem center;
    background-size: 7%;
    height: 4.5rem;
    box-shadow: 0.7rem 0.7rem 0.7rem rgba(80, 29, 0, 0.16);
    font-size: 1.6rem;
    font-weight: 600;
    border-radius: 2.4rem;
    padding-left: ${(props) => (props.google || props.naver || props.kakao) && '40px'};
    cursor: pointer;

    &:disabled {
        cursor: not-allowed;
        background-color: #e0e0e0;
    }
`;
