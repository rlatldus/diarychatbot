import React from 'react';
import * as Styled from './style';
import LabelInput from '../../components/@shared/LabelInput';
import Button from '../../components/@shared/Button';
import Header from '../../components/@shared/Header';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Styled.RegistBg>
            <Header />
            <Styled.ContentWrapper>
                <Styled.Title>회원가입</Styled.Title>
                <Styled.StyleForm>
                    <LabelInput>닉네임</LabelInput>
                    <LabelInput>이메일</LabelInput>
                    <LabelInput>비밀번호</LabelInput>
                    <Button primary margin="6rem 0 0 0">
                        가입 완료
                    </Button>
                    <Link to="/">
                        <Button>뒤로가기</Button>
                    </Link>
                </Styled.StyleForm>
            </Styled.ContentWrapper>
        </Styled.RegistBg>
    );
};

export default Register;
