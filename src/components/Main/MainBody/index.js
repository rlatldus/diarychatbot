import React from 'react';
import * as Styled from './style';
import BoardLists from '../BoardLists';
import MainBodyFooter from '../MainBodyFooter';

const MainBody = ({ fetchMyDiary }) => {
    return (
        <Styled.ContentWrapper>
            <BoardLists fetchMyDiary={fetchMyDiary} />
            <MainBodyFooter />
        </Styled.ContentWrapper>
    );
};

export default MainBody;
