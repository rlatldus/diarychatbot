import { useGetUser } from '../../hooks/@query/useGetUser';
import { useGetDiary } from '../../hooks/@query/useGetDiary';

import React from 'react';
import Header from '../../components/@shared/Header';

import * as Styled from './style';
import MainBody from '../../components/Main/MainBody';
import Loading from '../../components/@shared/Loading';

const Main = () => {
    const { isLoading: diaryLoading, data: diaryData } = useGetDiary();
    const { isLoading: userLoading, data: userData } = useGetUser();

    if (diaryLoading || userLoading) {
        return <Loading />;
    }

    const {
        data: {
            data: { fetchMyDiary },
        },
    } = diaryData;

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
            <MainBody fetchMyDiary={fetchMyDiary} />
        </Styled.MainBg>
    );
};

export default Main;
