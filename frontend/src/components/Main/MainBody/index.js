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

    // 이전 코드
    // useEffect(() => {
    //     if (select === '최근 생성일 순') {
    //         setFetchDiary('fetchMyDiary');
    //     } else if (select === '오래된 순') {
    //         setFetchDiary('fetchMyDiaryUpdateACS');
    //     } else if (select === '최근 수정일 순') {
    //         setFetchDiary('fetchMyDiaryUpdate');
    //     } else if (select === '최초 생성일 순') {
    //         setFetchDiary('fetchMyDiaryACS');
    //     }
    // }, [select]);

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
        <Styled.ContentWrapper>
            <Styled.SelectWrapper>
                <Select
                    options={['최근 생성일 순', '오래된 순', '최근 수정일 순', '최초 생성일 순']}
                    dataValue={[
                        'fetchMyDiary',
                        'fetchMyDiaryUpdateACS',
                        'fetchMyDiaryUpdate',
                        'fetchMyDiaryACS',
                    ]}
                    select={select}
                    setSelect={setSelect}
                    setFetchDiary={setFetchDiary}
                />
            </Styled.SelectWrapper>
            <BoardLists
                fetchMyDiary={
                    fetchMyDiarys ||
                    fetchMyDiarysUpdateACS ||
                    fetchMyDiarysUpdate ||
                    fetchMyDiarysACS
                }
                updatedAt={(fetchMyDiarysUpdateACS || fetchMyDiarysUpdate) && 'updatedAt'}
                createdAt={(fetchMyDiarys || fetchMyDiarysACS) && 'createdAt'}

                // 이전 코드
                // fetchMyDiary={
                //     (fetchDiary === 'fetchMyDiary' && fetchMyDiarys) ||
                //     (fetchDiary === 'fetchMyDiaryUpdateACS' && fetchMyDiarysUpdateACS) ||
                //     (fetchDiary === 'fetchMyDiaryUpdate' && fetchMyDiarysUpdate) ||
                //     (fetchDiary === 'fetchMyDiaryACS' && fetchMyDiarysACS)
                // }
                // updatedAt={
                //     // ((fetchDiary === 'fetchMyDiaryUpdateACS' ||
                //     //     fetchDiary === 'fetchMyDiaryUpdate') &&
                //     //     'updatedAt') ||
                //     // ((fetchDiary === 'fetchMyDiary' || fetchDiary === 'fetchMyDiaryACS') &&
                //     //     'createdAt')
                // }
            />

            <MainBodyFooter />
        </Styled.ContentWrapper>
    );
};

export default MainBody;
