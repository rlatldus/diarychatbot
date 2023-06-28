import { useNavigate, useParams } from 'react-router-dom';
import BoardList from '../BoardList';

import * as Styled from './style';
import { useEffect } from 'react';

const BoardLists = ({ fetchMyDiary, updatedAt, dataLoading }) => {
    const navigate = useNavigate();
    const { userId } = useParams();

    useEffect(() => {
        if (fetchMyDiary?.length === 0) return navigate(`/main/${userId}/Board`);
    }, [fetchMyDiary?.length, navigate, userId]);
    return (
        <Styled.BoardWrapper>
            {!fetchMyDiary && <div style={{ height: '100vh' }}></div>}
            {fetchMyDiary?.map((diary) => {
                return (
                    <BoardList
                        key={diary.id}
                        id={diary.id}
                        date={diary[updatedAt]}
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
