import styled from 'styled-components';
import googleIMG from '../../../assets/google.jpg';
import kakaoIMG from '../../../assets/kakao.jpg';
import naverIMG from '../../../assets/naver.jpg';

export const ButtonBg = styled.div`
    padding: 10px;
    margin: ${(props) => props.margin};
`;

export const ButtonShadow = styled.div`
    position: relative;
    width: ${(props) => (props.small ? '300px' : '400px')};
    height: 40px;
    box-shadow: -3px -3px 7px white;
    border-radius: 24px;
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
    width: ${(props) => (props.small ? '300px' : '400px')};
    background-image: ${(props) =>
        props.google
            ? `url(${googleIMG})`
            : props.kakao
            ? `url(${kakaoIMG})`
            : props.naver
            ? `url(${naverIMG})`
            : 'none'};
    background-repeat: no-repeat;
    background-position: 100px center;
    background-size: 7%;
    height: 45px;
    box-shadow: 7px 7px 7px rgba(80, 29, 0, 0.16);
    font-size: 16px;
    font-weight: 600;
    border-radius: 24px;
    padding-left: ${(props) => (props.google || props.naver || props.kakao) && '40px'};
`;
