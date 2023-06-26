import { useGetDiary } from '../../hooks/@query/useGetDiary';
import useFilterState from '../../hooks/@zustand/useFilterState';

import Loading from '../../components/@shared/Loading';
import BoardBody from '../../components/Board/BoardBody';

import * as Styled from './style';

const Board = () => {
    const filterState = useFilterState();
    const { isLoading: diaryLoading, data: diaryData } = useGetDiary(filterState.basicState);

    if (diaryLoading) {
        return <Loading />;
    }
    const {
        data: { data: fetchDiarys },
    } = diaryData;

    return (
        <Styled.BoardBg>
            <BoardBody
                fetchMyDiary={fetchDiarys[filterState.basicState]}
                updatedAt={filterState.dateValidate()}
            />
        </Styled.BoardBg>
    );
};

export default Board;
