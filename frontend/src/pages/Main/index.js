import { useGetUser } from '../../hooks/@query/useGetUser';

import React from 'react';
import Header from '../../components/@shared/Header';

import * as Styled from './style';
import MainBody from '../../components/Main/MainBody';
import Loading from '../../components/@shared/Loading';

const Main = () => {
    const { isLoading: userLoading, data: userData } = useGetUser();

    if (userLoading) {
        return <Loading />;
    }

    const {
        data: {
            data: {
                fetchUser: { name },
            },
        },
    } = userData;

    return (
        <Styled.MainBg>
            <Header />
            <Styled.NameTitle>{name} 님</Styled.NameTitle>
            <Styled.WelcomeTitle>오신걸 환영합니다.</Styled.WelcomeTitle>
            <MainBody />
        </Styled.MainBg>
    );
};

export default Main;
