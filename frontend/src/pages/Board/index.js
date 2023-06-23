import React, { useEffect, useState } from 'react';
import Loading from '../../components/@shared/Loading';
import BoardBody from '../../components/Board/BoardBody';
import { useGetDiary } from '../../hooks/@query/useGetDiary';
import * as Styled from './style';

const Board = () => {
    const [fetchDiary, setFetchDiary] = useState('fetchMyDiary');
    const { isLoading: diaryLoading, data: diaryData } = useGetDiary(fetchDiary);

    useEffect(() => {
        setFetchDiary('fetchMyDiary') ||
            setFetchDiary('fetchMyDiaryUpdateACS') ||
            setFetchDiary('fetchMyDiaryUpdate') ||
            setFetchDiary('fetchMyDiaryACS');
    }, [fetchDiary]);
    if (diaryLoading) {
        return <Loading />;
    }
    const {
        data: {
            data: {
                fetchMyDiary: fetchMyDiarys,
                fetchMyDiaryUpdateACS: fetchMyDiarysUpdateACS,
                fetchMyDiaryUpdate: fetchMyDiarysUpdate,
                fetchMyDiaryACS: fetchMyDiarysACS,
            },
        },
    } = diaryData;

    return (
        <Styled.BoardBg>
            <BoardBody
                fetchMyDiary={
                    fetchMyDiarys ||
                    fetchMyDiarysUpdateACS ||
                    fetchMyDiarysUpdate ||
                    fetchMyDiarysACS
                }
                updatedAt={
                    ((fetchDiary === 'fetchMyDiaryUpdateACS' ||
                        fetchDiary === 'fetchMyDiaryUpdate') &&
                        'updatedAt') ||
                    ((fetchDiary === 'fetchMyDiary' || fetchDiary === 'fetchMyDiaryACS') &&
                        'createdAt')
                }
            />
        </Styled.BoardBg>
    );
};

export default Board;
