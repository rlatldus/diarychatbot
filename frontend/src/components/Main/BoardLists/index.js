import BoardList from '../BoardList';

import * as Styled from './style';

const BoardLists = ({ fetchMyDiary, updatedAt }) => {
    return (
        <Styled.BoardWrapper>
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
