import React, { useEffect, useState } from 'react';
import * as Styled from './style';
import BoardLists from '../BoardLists';
import MainBodyFooter from '../MainBodyFooter';
import { useGetDiary } from '../../../hooks/@query/useGetDiary';
import Loading from '../../@shared/Loading';
import Select from '../../@shared/Select';

const MainBody = () => {
    const [fetchDiary, setFetchDiary] = useState('fetchMyDiary');
    const { isLoading: diaryLoading, data: diaryData } = useGetDiary(fetchDiary);
    const [select, setSelect] = useState('');

    useEffect(() => {
        if (select === '옛날') {
            setFetchDiary('fetchMyDiaryUpdateACS');
        } else if (select === '최신') {
            setFetchDiary('fetchMyDiary');
            //  else if (text === '업데이트순') {
            //     setFetchDiary('fetchMyDiaryUpdate');
            // }
        }
    }, [select]);

    if (diaryLoading) {
        return <Loading />;
    }

    const {
        data: {
            data: {
                fetchMyDiaryUpdateACS: fetchMyDiarysUpdateACS,
                fetchMyDiary: fetchMyDiarys,
                // fetchMyDiaryUpdate: fetchMyDiarysUpdate,
            },
        },
    } = diaryData;

    return (
        <Styled.ContentWrapper>
            <Styled.SelectWrapper>
                <Select options={['옛날', '최신']} select={select} setSelect={setSelect} />
            </Styled.SelectWrapper>
            <BoardLists
                fetchMyDiary={
                    fetchDiary === 'fetchMyDiaryUpdateACS' ? fetchMyDiarysUpdateACS : fetchMyDiarys
                    // (fetchDiary === 'fetchMyDiaryUpdate' && fetchMyDiarysUpdate)
                }
            />
            <MainBodyFooter />
        </Styled.ContentWrapper>
    );
};

export default MainBody;
