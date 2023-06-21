import React from 'react';
import * as Styled from './style';
import BoardLists from '../BoardLists';
import MainBodyFooter from '../MainBodyFooter';
import { useGetDiary } from '../../../hooks/@query/useGetDiary';
import Loading from '../../@shared/Loading';

const MainBody = () => {
    const { isLoading: diaryLoading, data: diaryData } = useGetDiary();

    if (diaryLoading) {
        return <Loading />;
    }

    const {
        data: {
            data: { fetchMyDiary },
        },
    } = diaryData;

    return (
        <Styled.ContentWrapper>
            <BoardLists fetchMyDiary={fetchMyDiary} />
            <MainBodyFooter />
        </Styled.ContentWrapper>
    );
};

export default MainBody;
