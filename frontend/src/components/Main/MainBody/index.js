import { useGetDiary } from '../../../hooks/@query/useGetDiary';
import useFilterState from '../../../hooks/@zustand/useFilterState';

import BoardLists from '../BoardLists';
import MainBodyFooter from '../MainBodyFooter';
import Loading from '../../@shared/Loading';
import Select from '../../@shared/Select';

import * as Styled from './style';

const MainBody = () => {
    const filterState = useFilterState();
    const { isLoading: diaryLoading, data: diaryData } = useGetDiary(filterState.basicState);

    if (diaryLoading) {
        return <Loading />;
    }

    const {
        data: { data: fetchDiarys },
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
                    filterState={filterState}
                />
            </Styled.SelectWrapper>
            <BoardLists
                fetchMyDiary={fetchDiarys[filterState.basicState]}
                updatedAt={filterState.dateValidate()}
            />

            <MainBodyFooter />
        </Styled.ContentWrapper>
    );
};

export default MainBody;
