import React from 'react';
import * as Styled from './style';
import BoardList from '../BoardList';

/*  추가한 props 코드 createdAt*/
const BoardLists = ({ fetchMyDiary, updatedAt, createdAt }) => {
    return (
        <Styled.BoardWrapper>
            {fetchMyDiary?.map((diary) => {
                const date = new Date(diary[updatedAt || createdAt]); /* 추가 */
                const dayOfWeek = date.getDay();
                const dateForm = date.toISOString().split('T')[0].split('-');
                const daysOfWeek = [
                    '일요일',
                    '월요일',
                    '화요일',
                    '수요일',
                    '목요일',
                    '금요일',
                    '토요일',
                ];
                const dayOfWeekString = daysOfWeek[dayOfWeek];
                return (
                    <BoardList
                        key={diary.id}
                        id={diary.id}
                        createDate={dateForm}
                        daysOfWeek={dayOfWeekString}
                        title={diary.title}
                        desc={diary.ask}
                        color={diary.color}
                        updatedAt={updatedAt}
                    />
                );
            })}
        </Styled.BoardWrapper>
    );
};

export default BoardLists;
