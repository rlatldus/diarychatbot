import React from 'react';
import Loading from '../../components/@shared/Loading';
import BoardBody from '../../components/Board/BoardBody';
import { useGetDiary } from '../../hooks/@query/useGetDiary';
import * as Styled from './style';

const Board = () => {
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
        <Styled.BoardBg>
            <BoardBody fetchMyDiary={fetchMyDiary} />
        </Styled.BoardBg>
    );
};

export default Board;
