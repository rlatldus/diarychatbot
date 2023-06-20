import React from 'react';
import * as Styled from './style';

const Header = () => {
    return (
        <Styled.HeaderBg>
            <Styled.Logo>AI.CheerUp Daily</Styled.Logo>
            <Styled.LogoCont>오늘 하루의 일기를 적어보세요</Styled.LogoCont>
        </Styled.HeaderBg>
    );
};

export default Header;
