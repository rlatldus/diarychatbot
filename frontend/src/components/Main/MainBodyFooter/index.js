import React from 'react';
import * as Styled from './style';
import Button from '../../@shared/Button';
import { useNavigate } from 'react-router-dom';
import { useLogout } from '../../../hooks/@query/useLogout';

const MainBodyFooter = () => {
    const navigate = useNavigate();

    const { mutate: Logout } = useLogout(navigate);
    return (
        <Styled.ButtonWrapper>
            <Button small primary>
                글쓰기
            </Button>
            <Button type="button" small onClick={Logout}>
                로그아웃
            </Button>
        </Styled.ButtonWrapper>
    );
};

export default MainBodyFooter;
