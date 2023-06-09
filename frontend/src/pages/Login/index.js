import React from 'react';
import * as Styled from './style';
import Button from './../../components/@shared/Button/index';
import LabelInput from '../../components/@shared/LabelInput';
import LineSocialLogin from '../../components/Sign/LineSocialLogin';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Styled.LoginBg>
            <Styled.HeaderWrapper>
                <Styled.TitleName>AI.CheerUp Daily</Styled.TitleName>
            </Styled.HeaderWrapper>
            <Styled.ContentWrapper>
                <Styled.LogoCont>오늘 하루의 일기를 적어보세요</Styled.LogoCont>
                <Styled.StyleForm>
                    <LabelInput>이메일</LabelInput>
                    <LabelInput>비밀번호</LabelInput>
                    <Button primary margin="1.6rem 0 0 0">
                        로그인
                    </Button>
                </Styled.StyleForm>
                <LineSocialLogin label="소셜로그인" />
                <Styled.StyleForm>
                    <Button google>google로 로그인</Button>
                    <Button kakao>카카오계정으로 로그인</Button>
                    <Button naver>네이버 아이디로 로그인</Button>
                </Styled.StyleForm>
                <Styled.RegistLink>
                    아직 회원이 아니신가요? <Link to="/regist">회원가입</Link>
                </Styled.RegistLink>
            </Styled.ContentWrapper>
        </Styled.LoginBg>
    );
};

export default Login;
