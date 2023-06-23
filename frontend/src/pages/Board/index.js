import React, { useEffect, useState } from 'react';
import Loading from '../../components/@shared/Loading';
import BoardBody from '../../components/Board/BoardBody';
import { useGetDiary } from '../../hooks/@query/useGetDiary';
import * as Styled from './style';

const Board = () => {
    const [fetchDiary, setFetchDiary] = useState('fetchMyDiaryUpdateACS');
    const { isLoading: diaryLoading, data: diaryData } = useGetDiary(fetchDiary);

    useEffect(() => {
        setFetchDiary('fetchMyDiaryUpdateACS') || setFetchDiary('fetchMyDiary');
    }, [fetchDiary]);
    if (diaryLoading) {
        return <Loading />;
    }
    const {
        data: {
            data: { fetchMyDiaryUpdateACS: fetchMyDiarysUpdateACS, fetchMyDiary: fetchMyDiarys },
        },
    } = diaryData;

    return (
        <Styled.BoardBg>
            <BoardBody fetchMyDiary={fetchMyDiarysUpdateACS || fetchMyDiarys} />
        </Styled.BoardBg>
    );
};

export default Board;
